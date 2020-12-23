using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResourceApi.Models
{
    public class UserLesson
    {
        public int Id { get; set; }
        public string Status { get; set; }
        public Guid AccountId { get; set; }
       // public Account Account { get; set; }
        public int LessonId { get; set; }
     //   public Lesson Lesson { get; set; }

    }
}
