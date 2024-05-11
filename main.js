import OpenAI from "openai";

function askQuestion()
{
    const openai = new OpenAI({
        apiKey: "TEST_1",
      });
      inputInformation = document.getElementById("questionInput").value
      const userInput = prompt(inputInformation);
      
      fetch(`https://api.openai.com/v1/chains`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openai.apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You will be provided with a question. Answer it.",
            },
            {
              role: "user",
              content: userInput,
            },
          ],
          temperature: 0.7,
          max_tokens: 64,
          top_p: 1,
        }),
      })
        .then((response) => response.json())
        .then((data) => document.getElementById('answerText').innerHTML)
        .catch((error) => console.error(error));
}

}
