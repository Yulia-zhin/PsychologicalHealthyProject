using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResourceApi.Models
{
    public class DailyHealth
    {
        public int Id { get; set; }
        public string DataDay { get; set; }

        public string MarkMood { get; set; }

        public string MarkPositive { get; set; }

        public string MarkHealth { get; set; }
        public Guid AccountId { get; set; }
    }
}
