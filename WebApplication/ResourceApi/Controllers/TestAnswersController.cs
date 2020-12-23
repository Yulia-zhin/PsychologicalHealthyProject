using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ResourceApi.Models;

namespace ResourceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestAnswersController : ControllerBase
    {
        ApplicationContext db;
        ///private readonly LessonStore store;

        public TestAnswersController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetAvailableTests()
        {
            return Ok(db.TestAnswers.ToList());
        }

        // GET: api/5
        [HttpGet("{id}")]
        //[Authorize(Roles = "User")]
        public IActionResult GetTestQuestions(int id)
        {
            var answersByTestId = db.TestAnswers.Where(o => o.TestQuestionsId == id);
            return Ok(answersByTestId);
        }

    }
}