using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnglishTutor.Entities
{
    internal class Response
    {
        public Choice[] choices { get; set; }
        public Data[] data { get; set; }

        public class Choice
        {
            public string text { get; set; }
        }

        public class Data
        {
            public string url { get; set; }
        }
    }
}

