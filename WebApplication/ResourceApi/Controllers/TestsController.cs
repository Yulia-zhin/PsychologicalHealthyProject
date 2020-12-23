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
    public class TestsController : Controller
    {
        ApplicationContext db;
        ///private readonly LessonStore store;

        public TestsController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetAvailableTests()
        {
            return Ok(db.Tests.ToList());
        }

    }
}