const OpenAI = require('openai');
const { qualityOfLife } = require('../data/qol-data'); // Load qol-data.js

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.analyze = async (req, res) => {
  const { answers } = req.body;

  if (!answers) {
    return res.status(400).json({ error: 'Answers not provided.' });
  }

  try {
    // Construct a detailed prompt using qolData.js for RAG
    let prompt = `The user has completed a quality of life questionnaire. Here are their responses:\n\n`;

    // Add user's answers and corresponding question text from qolData
    qualityOfLife.questions.forEach(question => {
      const userAnswer = answers[question.id] || 'No answer provided.';
      prompt += `- Question: ${question.text}\n  User's Answer: "${userAnswer}"\n`;
    });

    prompt += `\n---

**IMPORTANT**: Your entire response MUST be a valid JSON object. Do NOT include any text before or after the JSON object. The JSON object must have the following structure:

{
  "keyInsights": "string",
  "yourStrengths": "string",
  "opportunitiesForReflection": [
    "string",
    "string",
    "string"
  ],
  "personalizedGuidance": "string"
}

Each string value in the JSON should be detailed and comprehensive as per the following instructions. Do not escape newlines or special characters within the string values; they should be natural language. The array for "opportunitiesForReflection" should contain 3-5 distinct questions.\n\nKey Insights: (2-3 detailed paragraphs)
- Synthesize 2-3 primary themes or profound insights derived from the user's responses. Go beyond simple summaries; delve into the underlying implications of their answers regarding their current state of well-being.

Your Strengths: (1-2 detailed paragraphs)
- Identify and elaborate on 1-2 significant areas where the user demonstrates strong resilience, positive coping mechanisms, or notable aspects of well-being. Provide specific examples from their answers if possible.

Opportunities for Reflection/Growth: (3-5 thoughtful questions)
- Formulate 3-5 distinct, thought-provoking, quirky, polite, and wise questions that encourage deep self-reflection and exploration of potential growth areas. These should be insightful and designed to prompt the user to consider new perspectives or inner resources.
- *Example*: If a user mentioned being hard on themselves, a question could be: "If your dearest friend faced a similar setback, would you offer them the same harsh words you reserve for yourself, or might you extend a kinder, more understanding hand? What wisdom might that gentle approach reveal?"
- Ensure these questions are directly relevant to the user's answers and the parameters discussed, inviting them to connect with their inner wisdom.

Personalized Guidance: (1-2 actionable, guiding paragraphs)
- Offer 1-2 actionable, gentle guiding insights that integrate the overall analysis and draw specifically from the guidance provided within the parameters. Frame these as supportive prompts or observations, encouraging self-directed improvement rather than prescriptive advice. Connect this guidance to the user's identified insights and areas for reflection.

**Crucially**: Leverage the specific parameter descriptions and guidance provided below ('qolData.js') to inform your analysis, strengths, questions, and guidance. Synthesize this RAG information directly with the user's text responses. Quote the user's answers judiciously when relevant to provide highly personalized feedback.`;

    // Add parameter guidance from qolData for RAG
    qualityOfLife.parameters.forEach(param => {
      prompt += `
Parameter: ${param.name} (${param.description})
  Guidance for low scores: ${param.guidance.low}
  Guidance for medium scores: ${param.guidance.medium}
  Guidance for high scores: ${param.guidance.high}
`;
    });

    prompt += `
**Final and Absolute Instruction**: Your tone must be consistently supportive, deeply empathetic, compassionate, and unconditionally understanding. **Never be rude, judgmental, or dismissive in any way, regardless of the user's input.** Ensure the JSON structure is perfectly valid. Do not use generic filler.`;

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Or "gpt-4" for potentially better results
      messages: [
        { role: "system", content: "You are a supportive and empathetic mental health assistant providing guidance based on a quality of life questionnaire, responding only in JSON." },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" },
    });

    const gptResponse = chatCompletion.choices[0].message.content;
    const parsedResponse = JSON.parse(gptResponse);
    res.json(parsedResponse);
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    // Attempt to parse error detail if it's a JSON string
    let errorDetail = error.message;
    try {
        const errorJson = JSON.parse(error.message);
        if (errorJson.error && errorJson.error.message) {
            errorDetail = errorJson.error.message;
        }
    } catch (e) {
        // Not a JSON error, keep original message
    }
    res.status(500).json({ error: 'Failed to get analysis from GPT model.', details: errorDetail });
  }
};
