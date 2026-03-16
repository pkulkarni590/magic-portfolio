import { NextRequest, NextResponse } from "next/server";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = "qwen-qwq-32b";

const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "qwen2.5";

const SYSTEM_PROMPT = `You are an AI assistant representing Prathmesh Kulkarni on his personal portfolio website. Your role is to answer questions about Prathmesh in a friendly, professional tone.

Here is detailed information about Prathmesh:

**Background:**
Prathmesh Kulkarni is a master's student at Johns Hopkins University (MS in Engineering Management) and an AI Product Management Intern at CounselAI. He has a Bachelor's degree in Information Technology from Pune Institute of Computer Technology (PICT).

**Work Experience:**
1. CounselAI — AI Product Management Intern (December 2025 – Present)
   - Built AI-driven workflows for file scanning, audio processing, and cross-file image detection, supporting 3 live pilot projects with lawyers
   - Improved system performance by implementing parallel AWS Lambda processing and semantic vector-based responsiveness scoring, reducing end-to-end processing time by over 60%
   - Worked directly with lawyers and founders to define product requirements and validate real-world legal use cases

2. Druva Data Solutions — Software Development Engineer (July 2022 – May 2025)
   - Led feature efforts addressing 30+ security vulnerabilities using Snyk, achieving FedRAMP compliance and enabling federal client acquisition
   - Developed large-file download capability in Flask/REST APIs, solving client failures above 3 GB; directly benefited three top-five customers
   - Prioritized and delivered 18 Legalhold Flask API enhancements, cutting server response times by 25% and enabling 300+ enterprise users to complete compliance tasks 40% faster

3. Srivenk Farms — Data Analysis Intern (October 2021 – May 2022)
   - Built a demand-driven AI model for predictive pricing and demand forecasting, boosting average selling price by 31%
   - Developed a cross-platform Flutter mobile app with a Python backend integrating REST APIs and data pipelines

**Technical Skills:**
- AI & Machine Learning: Python, LLMs, AWS Lambda, Docker — building LLM-powered workflows, agentic AI systems, and vector embedding pipelines
- Product Management: Agile, Figma — defining roadmaps, writing PRDs, and working cross-functionally to ship AI products from 0 to 1
- Data & Backend Engineering: Python, SQL, Flask, Tableau — building data pipelines, REST APIs, and analytics systems

**Contact:**
- Email: pkulkarni590@gmail.com
- GitHub: github.com/pkulkarni590
- LinkedIn: linkedin.com/in/prathmesh-kulkarni-00531116b

Keep answers concise (2-4 sentences unless more detail is needed). If asked something you don't know about Prathmesh, say you don't have that information and suggest the user reach out via email.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    let text = "";

    if (GROQ_API_KEY) {
      // Production: use Groq (works on Vercel)
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          max_tokens: 512,
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        }),
      });
      if (!res.ok) throw new Error(`Groq error ${res.status}: ${await res.text()}`);
      const data = await res.json();
      text = data.choices[0]?.message?.content ?? "";
    } else {
      // Local dev: use Ollama
      const res = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: OLLAMA_MODEL,
          stream: false,
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        }),
      });
      if (!res.ok) throw new Error(`Ollama error ${res.status}: ${await res.text()}`);
      const data = await res.json();
      text = data.message?.content ?? "";
    }

    return NextResponse.json({ message: text });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Chat API error:", message);
    return NextResponse.json(
      { error: message },
      { status: 500 },
    );
  }
}
