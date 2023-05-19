using System;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.Json;
using EnglishTutor.Entities;

namespace EnglishTutor
{
    internal class Program
    {
        static void Main(string[] args)
        {
            OpenAITutor  tutor = new OpenAITutor();

            while (true) 
            {
                Console.WriteLine("What is your question?");
                string prompt = Console.ReadLine();

                if (prompt.ToLower() == "close")
                {
                    break;
                }
                else
                {
                    Console.WriteLine(tutor.question(prompt));
                }
            }
        }
    }
}
