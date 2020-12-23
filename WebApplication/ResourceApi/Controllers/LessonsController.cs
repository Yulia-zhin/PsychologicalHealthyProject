using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ResourceApi.Models;

namespace ResourceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonsController : Controller
    {
        ApplicationContext db;
        ///private readonly LessonStore store;

        public LessonsController(ApplicationContext context)
        {
            //this.store = store;
            db = context;           
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetAvailableLessons()
        {
            //return db.Lessons.ToList();
           return Ok(db.Lessons.ToList());
        }
    }
}
