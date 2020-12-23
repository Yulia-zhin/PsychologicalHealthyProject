using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResourceApi.Models
{
    public class UserTest
    {
        public int Id { get; set; }
        public Guid AccountId { get; set; }
        public int TestsId { get; set; }
        public string Result { get; set; }
        public int QResult { get; set; }
    }
}
