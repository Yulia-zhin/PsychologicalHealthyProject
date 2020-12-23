using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResourceApi.Models
{
    public class HelpTask
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Description { get; set; }

        public string TaskCategoryId { get; set; }
        public TaskCategory TaskCategory { get; set; }
    }
}
