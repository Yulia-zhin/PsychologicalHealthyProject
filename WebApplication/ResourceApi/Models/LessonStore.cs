 using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResourceApi.Models
{
    public class LessonStore
    {
        public List<Lesson> Lessons => new List<Lesson>
        {
            new Lesson{Id= 1, Name= "Name 1", Description = "Description 1", PathAttachment = "path1"},
            new Lesson{Id= 2, Name= "Name 2", Description = "Description 2", PathAttachment = "path2"},
            new Lesson{Id= 3, Name= "Name 3", Description = "Description 3", PathAttachment = "path3"},
            new Lesson{Id= 4, Name= "Name 4", Description = "Description 4", PathAttachment = "path4"}
        };

        //public Dictionary<Guid, int[]> UserLessons => new Dictionary<Guid, int[]>
        public Dictionary<Guid, int[]> UserLessons => new Dictionary<Guid, int[]>
        {
            {Guid.Parse("e2371dc9-a849-4f3c-9004-df8fc921c13a"), new int[] {1,3} },
            // {Guid.Parse("2"), new int[] {2,3, 4} }
        };
    }
}
