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
    public class TestQuestionsController : ControllerBase
    {
        ApplicationContext db;
        ///private readonly LessonStore store;

        public TestQuestionsController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetAvailableTests()
        {
            return Ok(db.TestQuestions.ToList());
        }

        // GET: api/5

        // [Authorize(Roles = "User")]
        [HttpGet("{id}")]
        public IActionResult GetTestQuestions(int id)
        {
            var questionsByTestId = db.TestQuestions.Where(o => o.TestsId == id);
            return Ok(questionsByTestId);
        }

        //// GET: api/answer/5
        //[HttpGet("{id}")]
        //[Authorize(Roles = "User")]
        //public IActionResult GetTestAnswers(int id)
        //{
        //    var answersByTestId = db.TestAnswers.Where(o => o.TestQuestionsId == id);
        //    return Ok(answersByTestId);
        //}

    }
}