using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResourceApi.Models
{
    public class TestAnswer
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int Mark { get; set; }
        public int TestQuestionsId { get; set; }

    }
}
