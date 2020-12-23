using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ResourceApi.Models;
using Newtonsoft.Json.Serialization;

namespace ResourceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        ApplicationContext db;
        private Guid UserId => Guid.Parse(User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value);
        public UsersController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("Users")]
        public IActionResult GetAllUsers()
        {
            return Ok(db.Accounts.ToList());
        }

        [HttpGet]
        [Route("GetAllUsersEmail")]
        public IActionResult GetAllUsersEmail()
        {
            List<string> emailsList = new List<string>();
            var emailUser = db.Accounts;
            foreach (Account user in emailUser)
            {
                emailsList.Add(user.Email);
            }
            return Ok(emailsList.ToList());
        }

        [HttpGet]
        [Route("GetRole")]
        [Authorize]
        public IActionResult GetRole()
        {
            List<string> userList = new List<string>();
            var adminUser = db.Accounts.Where(o => o.Id == UserId);
            foreach(Account user in adminUser)
            {
                if (user.Roles.Equals("Admin"))
                {
                    userList.Add("Admin");
                    return Ok(userList);
                }
            }
            userList.Add("User");
            return Ok(userList);
        }

        [HttpGet]
        [Route("GetFalse")]
        public IActionResult GetFalse()
        {
            return Ok(false);
        }


        [HttpPost]
        [Route("SetDailyUserStatus")]
        public ActionResult SetDailyUserStatus(DailyHealth dailyHealth)
        {
            string dayToday = DateTime.Now.ToString("dd.MM.yyyy");
            var dailyHealthByDay = db.DailyHealths.Where(o => o.AccountId == UserId)
              .Where(o => o.DataDay.Equals(dayToday));
              
            foreach (DailyHealth dh in dailyHealthByDay)
            {
                db.Remove(dh);
            }

            dailyHealth.AccountId = UserId;
            dailyHealth.DataDay = DateTime.Now.ToString("dd.MM.yyyy");
            db.DailyHealths.Add(dailyHealth);
            db.SaveChanges();

            return Ok();
        }

        [HttpGet]
        [Authorize(Roles = "User")]
        [Route("GetDailyUserStatus")]
        public ActionResult GetDailyUserStatus()
        {

            var dailyHealthUser = db.DailyHealths.Where(o => o.AccountId == UserId);

            return Ok(dailyHealthUser);
        }

        [HttpGet]
        [Authorize(Roles = "User")]
        [Route("GetDailyUserStatusJSON")]
        public ActionResult GetDailyUserStatusJSON()
        {

            return Ok(db.DailyHealths.Where(o => o.AccountId == UserId).ToList());
        }

        [HttpPost]
        [Route("Create")]
        public ActionResult Create(Account user)
        {
            Guid guidObj = Guid.NewGuid();
            user.Id = guidObj;
            user.Roles = "User";
            db.Accounts.Add(user);
            db.SaveChanges();

            return Ok();
        }
    }
}
