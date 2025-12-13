const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: `
You are a senior software engineer acting as a code reviewer.

Review code for:
- Quality, readability, and maintainability
- Best practices and modern standards
- Performance and scalability issues
- Security risks and logical bugs
- Unnecessary complexity (DRY, SOLID)

Guidelines:
- Be concise and constructive
- Explain why changes are needed
- Suggest refactored code when helpful
- Highlight both strengths and weaknesses

Respond using clear, structured Markdown.
`

});


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);

    console.log(result.response.text())

    return result.response.text();

}

module.exports = generateContent    
