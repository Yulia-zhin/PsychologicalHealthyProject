using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResourceApi.Models
{
    public class ApplicationContext:DbContext
    {

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
           : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<UserLesson> UserLessons { get; set; }
        public DbSet<HelpTask> HelpTasks { get; set; }
        public DbSet<TaskCategory> TaskCategories { get; set; }
        public DbSet<UserTask> UserTasks { get; set; }
        public DbSet<Test> Tests { get; set; }

        public DbSet<TestQuestion> TestQuestions { get; set; }
        public DbSet<TestAnswer> TestAnswers { get; set; }
        public DbSet<TestKey> TestKeys { get; set; }

        public DbSet<UserTest> UserTests { get; set; }
        public DbSet<DailyHealth> DailyHealths { get; set; }

    }
}
