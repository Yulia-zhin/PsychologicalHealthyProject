using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ResourceApi.Models;

namespace ResourceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserHelpTasksController : Controller
    {
        //  private readonly LessonStore store;
        private Guid UserId => Guid.Parse(User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value);

        ApplicationContext db;

        // public UserLessonsController(LessonStore store)
        public UserHelpTasksController(ApplicationContext context)
        {
            db = context;
        }


        [HttpGet]
        [Authorize(Roles = "User")]
        [Route("GetCurrentUserHelpTask")]
        public IActionResult GetCurrentUserHelpTask()
        {

            var tasksByCurrentUsersID = db.UserTasks.Where(o => o.AccountId == UserId);

            List<int> tasksByCurrentUsersIDList = new List<int>();
            List<HelpTask> HelptaskList = new List<HelpTask>();
            foreach (UserTask u in tasksByCurrentUsersID)
            {
                if(u.Status.Equals("current"))
                    tasksByCurrentUsersIDList.Add(u.HelpTaskId);
            }

            var usersHelp = db.HelpTasks;
            foreach (HelpTask t in usersHelp)
            {
                for (int i = 0; i < tasksByCurrentUsersIDList.Count; i++)
                {
                    if (tasksByCurrentUsersIDList[i] == t.Id)
                    {
                        HelptaskList.Add(t);
                    }
                }
            }
          
            return Ok(HelptaskList);
        }

        [HttpGet]
        [Authorize(Roles = "User")]
        [Route("GetFinishUserHelpTask")]
        public IActionResult GetFinishUserHelpTask()
        {

            var tasksByCurrentUsersID = db.UserTasks.Where(o => o.AccountId == UserId);

            List<int> tasksByCurrentUsersIDList = new List<int>();
            List<HelpTask> HelptaskList = new List<HelpTask>();
            foreach (UserTask u in tasksByCurrentUsersID)
            {
                if (u.Status.Equals("finish"))
                    tasksByCurrentUsersIDList.Add(u.HelpTaskId);
            }

            var usersHelp = db.HelpTasks;
            foreach (HelpTask t in usersHelp)
            {
                for (int i = 0; i < tasksByCurrentUsersIDList.Count; i++)
                {
                    if (tasksByCurrentUsersIDList[i] == t.Id)
                    {
                        HelptaskList.Add(t);
                    }
                }
            }

            return Ok(HelptaskList);
        }

        [HttpPost]
        [Route("SaveHelpTask")]
        public ActionResult SaveHelpTask(HelpTask helpTask)
        {
            UserTask userTask = new UserTask();
            userTask.AccountId = UserId;
            userTask.HelpTaskId = helpTask.Id;
            userTask.Status = "current";

            var helpTasksByCurrentUsersID = db.UserTasks.Where(o => o.AccountId == UserId);

            foreach (UserTask ut in helpTasksByCurrentUsersID)
            {
                if (ut.HelpTaskId == helpTask.Id)
                    return Ok();
            }

            db.UserTasks.Add(userTask);
            db.SaveChanges();

            return Ok();
        }

        [HttpPost]
        [Route("AddFinishHelpTask")]
        public ActionResult AddFinishHelpTask(HelpTask helpTask)
        {
            UserTask userTask = new UserTask();
            userTask.AccountId = UserId;
            userTask.HelpTaskId = helpTask.Id;
            userTask.Status = "finish";


            db.UserTasks.Add(userTask);
            db.SaveChanges();

            return Ok();
        }

        [HttpPost]
        [Route("DeleteUserHelpTask")]
        public ActionResult DeleteUserHelpTask(HelpTask helpTask)
        {
            var helpTaskById = db.UserTasks.Where(o => o.AccountId == UserId)
               .Where(o => o.HelpTaskId == helpTask.Id)
               .Where(o => o.Status.Equals("current"));
            foreach (UserTask ut in helpTaskById)
            {
                db.Remove(ut);
            }
            db.SaveChanges();
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetHelpTask(int id)
        {
            var helpTaskById = db.HelpTasks.Where(o => o.Id == id);
            return Ok(helpTaskById);
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("GetCurrentUsersTasks")]
        public IActionResult GetCurrentUsersLessons()
        {
            var tasksUsers = db.UserTasks.Where(o => o.Status == "current");
            var helpTasks = db.HelpTasks;
            List<UserTask> currentTasksList = new List<UserTask>();
            List<HelpTask> currentTask = new List<HelpTask>();
            foreach (UserTask ut in tasksUsers)
            {
                currentTasksList.Add(ut);
            }

            foreach (HelpTask l in helpTasks)
            {
                foreach (UserTask ul in currentTasksList)
                {
                    if (ul.HelpTaskId == l.Id)
                        currentTask.Add(l);

                }
            }
            return Ok(currentTask);
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("GetFinishUsersTasks")]
        public IActionResult GetFinishUsersTasks()
        {
            var tasksUsers = db.UserTasks.Where(o => o.Status == "finish");
            var helpTasks = db.HelpTasks;
            List<UserTask> currentTasksList = new List<UserTask>();
            List<HelpTask> currentTask = new List<HelpTask>();
            foreach (UserTask ut in tasksUsers)
            {
                currentTasksList.Add(ut);
            }

            foreach (HelpTask l in helpTasks)
            {
                foreach (UserTask ul in currentTasksList)
                {
                    if (ul.HelpTaskId == l.Id)
                        currentTask.Add(l);

                }
            }
            return Ok(currentTask);
        }
    }
}