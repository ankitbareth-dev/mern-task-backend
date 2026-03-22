import AIModel from "../models/ai.model";

export const askAIService = async (prompt: string) => {
  const response = await fetch(`${process.env.OPENROUTER_URL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openrouter/free",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const data = await response.json();

  const aiText = data?.choices?.[0]?.message?.content || "No response from AI";

  const saved = await AIModel.create({
    prompt,
    response: aiText,
  });

  return saved;
};
