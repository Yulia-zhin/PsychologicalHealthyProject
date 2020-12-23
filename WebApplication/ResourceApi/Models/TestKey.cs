using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResourceApi.Models
{
    public class TestKey
    {
        public int Id { get; set; }
        public int TestsId { get; set; }
        public int MaxKey { get; set; }
        public int MinKey { get; set; }
        public string Result { get; set; }

        public int QResult { get; set; }

    }
}
