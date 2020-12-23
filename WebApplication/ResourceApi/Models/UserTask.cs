using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResourceApi.Models
{
    public class UserTask
    {
        public int Id { get; set; }
        public string Status { get; set; }
        public Guid AccountId { get; set; }
        public int HelpTaskId { get; set; }

    }
}
