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
    public class UserTestsController : ControllerBase
    {
        private Guid UserId => Guid.Parse(User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value);

        ApplicationContext db;
        public UserTestsController(ApplicationContext context)
        {
            db = context;
        }


        [HttpGet]
        [Authorize(Roles = "User")]
        [Route("")]
        public IActionResult GetUserTestResult()
        {

            var resultsByCurrentUsersID = db.UserTests.Where(o => o.AccountId == UserId);

            return Ok(resultsByCurrentUsersID);
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("GetUsersTest")]
        public IActionResult GetUsersTasks()
        {
            var testsUsers = db.UserTests;
            var tests = db.Tests;
            List<UserTest> userTestsList = new List<UserTest>();
            List<Test> testsList = new List<Test>();
            foreach (UserTest ut in testsUsers)
            {
                userTestsList.Add(ut);
            }

            foreach (Test t in tests)
            {
                foreach (UserTest ul in userTestsList)
                {
                    if (ul.TestsId == t.Id)
                        testsList.Add(t);

                }
            }
            return Ok(testsList);
        }
    }
}
