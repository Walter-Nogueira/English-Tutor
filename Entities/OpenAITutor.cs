using System;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace EnglishTutor.Entities
{
    internal class OpenAITutor
    {
        private string _apiKey = "APi_KEY";

        public async Task question(string message)
        {
            if (String.IsNullOrWhiteSpace(message))
            {
                Console.Clear();
                Thread.Sleep(2000);
                throw new ArgumentNullException("You need to ask something!");
            }

            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add("Authorization", "Bearer " + _apiKey);
                var response = await client.PostAsync("https://api.openai.com/v1/completions",
                new StringContent("{\"model\": \"text-davinci-003\", \"prompt\": \"" + message + "\", \"temperature\": 1, \"max_tokens\": 1024}", Encoding.UTF8, "application/json"));

                if (response.IsSuccessStatusCode)
                {
                    string responseStg = await response.Content.ReadAsStringAsync();
                    Response data = JsonSerializer.Deserialize<Response>(responseStg);

                    Array.ForEach(data.choices.ToArray(), (item) => Console.WriteLine(item.text.Replace("\n", "")));
                }
                else
                {
                    Console.WriteLine("Something went wrong");
                }
            }

        }
    }
}
