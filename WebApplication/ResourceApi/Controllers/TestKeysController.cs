using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ResourceApi.Models;

namespace ResourceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestKeysController : ControllerBase
    {
        ApplicationContext db;
        ///private readonly LessonStore store;
        private Guid UserId => Guid.Parse(User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value);
        public TestKeysController(ApplicationContext context)
        {

              db = context;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetAvailableTests()
        {
            return Ok(db.TestKeys.ToList());
        }

        // GET: api/5
        [HttpGet("{id}")]
        //[Authorize(Roles = "User")]
        public IActionResult GetTestKeyById(int id)
        {
            var keysByTestId = db.TestKeys.Where(o => o.TestsId == id);
            return Ok(keysByTestId);
        }

        [HttpPost]
        [Route("SaveResult")]
        public ActionResult SaveResult(TestKey testKey)
        {
            UserTest userTest = new UserTest();
            userTest.AccountId = UserId;
            userTest.Result = testKey.Result;
            userTest.TestsId = testKey.TestsId;
            userTest.QResult = testKey.QResult;

            db.UserTests.Add(userTest);
            db.SaveChanges();

            return Ok();
        }
    }
}
