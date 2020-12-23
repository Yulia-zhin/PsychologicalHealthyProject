using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ResourceApi.Models;

namespace ResourceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelpTasksController : ControllerBase
    {
        private readonly ApplicationContext db;
        private Guid UserId => Guid.Parse(User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value);

        public HelpTasksController(ApplicationContext context)
        {
            db = context;          
        }

        // GET: api/HelpTasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HelpTask>>> GetHelpTasks()
        {
            return await db.HelpTasks.ToListAsync();
        }


        [HttpGet]
        [Route("GetHelpTaskCategory")]
        public IActionResult GetHelpTaskCategory()
        {
            var helpTaskCategory = db.HelpTasks;
            List<string> helpTaskCategoryList = new List<string>();
            foreach(HelpTask task in helpTaskCategory)
            {
                if (!helpTaskCategoryList.Contains(task.TaskCategoryId))
                    helpTaskCategoryList.Add(task.TaskCategoryId); 
            }
            return Ok(helpTaskCategoryList.ToList());
        }


        [HttpGet]
        [Authorize(Roles = "User")]
        [Route("GetHelpTaskCategoryForUser")]
        public IActionResult GetHelpTaskCategoryForUser()
        {
            var helpTaskCategory = db.HelpTasks;
            var userTestResult = db.UserTests;
            List<string> helpTaskCategoryList = new List<string>();
            int maxQ = 0;
            foreach (UserTest userTest in userTestResult)
            {

                if (userTest.AccountId == UserId)
                {
                    if(maxQ< userTest.QResult)
                        maxQ = userTest.QResult;
                }
            }

            var helpTaskCategoryQ = db.TaskCategories.Where(o => o.QResult <= maxQ);
            List<TaskCategory> listTaskCategoryQ = new List<TaskCategory>();
            foreach (TaskCategory taskCategoryQ in helpTaskCategoryQ)
            {
                listTaskCategoryQ.Add(taskCategoryQ);
            }

            foreach (HelpTask task in helpTaskCategory)
            {
                foreach (TaskCategory taskCategoryQ in listTaskCategoryQ)
                {
                    if (!helpTaskCategoryList.Contains(task.TaskCategoryId)&& task.TaskCategoryId== taskCategoryQ.Id)
                        helpTaskCategoryList.Add(task.TaskCategoryId);
                }
            }
            return Ok(helpTaskCategoryList.ToList());
        }

        // GET: api/HelpTasks/5
        [HttpGet("{id}")]
        [Route("")]
        public IActionResult GetHelpTask(string id)
        {
            int ID;
            bool isInt = Int32.TryParse(id, out ID);
            if (isInt)
            {
                var helpTaskById = db.HelpTasks.Where(o => o.Id == ID);
                return Ok(helpTaskById);
            }
            else
            {
                var helpTaskByCategory = db.HelpTasks.Where(o => o.TaskCategoryId == id);
                 return Ok(helpTaskByCategory);
            }

        }

       
        [HttpPost]
        public async Task<ActionResult<HelpTask>> PostHelpTask(HelpTask helpTask)
        {
            db.HelpTasks.Add(helpTask);
            await db.SaveChangesAsync();

            return CreatedAtAction("GetHelpTask", new { id = helpTask.Id }, helpTask);
        }

        // DELETE: api/HelpTasks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<HelpTask>> DeleteHelpTask(int id)
        {
            var helpTask = await db.HelpTasks.FindAsync(id);
            if (helpTask == null)
            {
                return NotFound();
            }

            db.HelpTasks.Remove(helpTask);
            await db.SaveChangesAsync();

            return helpTask;
        }

        private bool HelpTaskExists(int id)
        {
            return db.HelpTasks.Any(e => e.Id == id);
        }
    }
}
