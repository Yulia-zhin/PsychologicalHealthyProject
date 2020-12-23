using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ResourceApi.Models;

namespace ResourceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserLessonsController : Controller
    {
      //  private readonly LessonStore store;
        private Guid UserId => Guid.Parse(User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value);

        ApplicationContext db;
        public UserLessonsController(ApplicationContext context)
        {
            db = context;
        }


        [HttpGet]
        [Authorize(Roles = "User")]
        [Route("CurrentUserLessons")]
        public IActionResult CurrentUserLessons()
        {

            var lessonsByCurrentUsersID = db.UserLessons.Where(o => o.AccountId == UserId);

            List<Lesson> LessonList = new List<Lesson>();
            List<int> lessonsByCurrentUsersIDList = new List<int>();
            foreach (UserLesson u in lessonsByCurrentUsersID)
            {
                if(u.Status.Equals("current"))
                    lessonsByCurrentUsersIDList.Add(u.LessonId);
            }

            var usersLessons = db.Lessons;
            foreach (Lesson l in usersLessons)
            {
                for (int i = 0; i < lessonsByCurrentUsersIDList.Count; i++)
                {
                    if (lessonsByCurrentUsersIDList[i] == l.Id)
                    {
                        LessonList.Add(l);
                    }
                }
            }

            return Ok(LessonList);
        }

        [HttpGet]
        [Authorize(Roles = "User")]
        [Route("FinishUserLessons")]
        public IActionResult FinishUserLessons()
        {

            var lessonsByCurrentUsersID = db.UserLessons.Where(o => o.AccountId == UserId);

            List<int> lessonsByCurrentUsersIDList = new List<int>();
            List<Lesson> LessonList = new List<Lesson>();
            foreach (UserLesson u in lessonsByCurrentUsersID)
            {
                if (u.Status.Equals("finish"))
                    lessonsByCurrentUsersIDList.Add(u.LessonId);
            }

            var usersLessons = db.Lessons;
            foreach (Lesson l in usersLessons)
            {
                for (int i = 0; i < lessonsByCurrentUsersIDList.Count; i++)
                {
                    if (lessonsByCurrentUsersIDList[i] == l.Id)
                    {
                        LessonList.Add(l);
                    }
                }
            }

            return Ok(LessonList);
        }

        [HttpPost]
        [Route("SaveLesson")]
        public ActionResult SaveLesson(Lesson lesson)
        {
            UserLesson userLesson = new UserLesson();
            userLesson.AccountId = UserId;
            userLesson.LessonId = lesson.Id;
            userLesson.Status = "current";

            var lessonsByCurrentUsersID = db.UserLessons.Where(o => o.AccountId == UserId);

            foreach (UserLesson ul in lessonsByCurrentUsersID)
            {
                if (ul.LessonId == lesson.Id)
                    return Ok();
            }

            db.UserLessons.Add(userLesson);
            db.SaveChanges();

            return Ok();
        }

        [HttpPost]
        [Route("AddFinishLesson")]
        public ActionResult AddFinishLesson(Lesson lesson)
        {
            UserLesson userLesson = new UserLesson();
            userLesson.AccountId = UserId;
            userLesson.LessonId = lesson.Id;
            userLesson.Status = "finish";


            db.UserLessons.Add(userLesson);
            db.SaveChanges();

            return Ok();
        }

        [HttpPost]
        [Route("DeleteUserLesson")]
        public ActionResult DeleteUserLesson(Lesson lesson)
        {
            var lessonById = db.UserLessons.Where(o => o.AccountId == UserId)
               .Where(o => o.LessonId == lesson.Id)
               .Where(o => o.Status.Equals("current"));
            foreach (UserLesson ul in lessonById)
            {
                db.Remove(ul);
            }
            db.SaveChanges();
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetLesson(int id)
        {
            var lessonById = db.Lessons.Where(o => o.Id == id);
            return Ok(lessonById);
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("GetFinishUsersLessons")]
        public IActionResult GetFinishUsersLessons()
        {

            var lessonsUsers = db.UserLessons.Where(o => o.Status== "finish");
            var lessons = db.Lessons;
            List<UserLesson> finishLessonsList = new List<UserLesson>();
            List<Lesson> finishLessons = new List<Lesson>();
            foreach (UserLesson ul in lessonsUsers)
            {
                finishLessonsList.Add(ul);
            }

            foreach (Lesson l in lessons)
            {
                foreach (UserLesson ul in finishLessonsList)
                {
                    if (ul.LessonId == l.Id)
                        finishLessons.Add(l);

                }
            }
            return Ok(finishLessons);
        }


        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("GetCurrentUsersLessons")]
        public IActionResult GetCurrentUsersLessons()
        {
            var lessonsUsers = db.UserLessons.Where(o => o.Status == "current");
            var lessons = db.Lessons;
            List<UserLesson> currentLessonsList = new List<UserLesson>();
            List<Lesson> currentLessons = new List<Lesson>();
            foreach (UserLesson ul in lessonsUsers)
            {
                currentLessonsList.Add(ul);
            }

            foreach (Lesson l in lessons)
            {
                foreach (UserLesson ul in currentLessonsList)
                {
                    if (ul.LessonId == l.Id)
                        currentLessons.Add(l);

                }
            }
            return Ok(currentLessons);
        }
    }
}
