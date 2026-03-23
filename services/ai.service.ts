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

  return { response: aiText };
};

interface SaveFlowData {
  prompt: string;
  response: string;
}

export const saveFlowService = async (data: SaveFlowData) => {
  const saved = await AIModel.create({
    prompt: data.prompt,
    response: data.response,
  });

  return saved;
};
