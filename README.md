# Prathmesh Kulkarni — Personal Portfolio

> AI PM Intern · Builder · Ironman 70.3 Finisher

**Live:** [prathmeshkulkarni.com](https://prathmeshkulkarni.com) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/prathmesh-kulkarni) &nbsp;·&nbsp; [Email](mailto:pkulkarni590@gmail.com)

---

## What This Is

My personal portfolio — built to show who I am, what I've built, and how I think. It covers my work experience, technical projects, writing, and life outside of work.

---

## Sections

| Page | What's there |
|---|---|
| **Home** | Intro and headline |
| **About** | Work experience, education, skills |
| **Work** | Toggle between experience and side projects |
| **Blog** | Writing on AI, products, and technology |
| **Life** | Personal stories — including Ironman 70.3 Bahrain |
| **Contact** | Reach me directly |

---

## Built With

- **Next.js 16** — App Router, server + client components
- **Once UI** — Component library for layout and design
- **Groq API** (`qwen-qwq-32b`) — Powers the AI chat widget in production
- **Ollama** — Local LLM for development
- **Nodemailer + Gmail SMTP** — Contact form email delivery
- **Vercel** — Deployment

---

## Running Locally

```bash
# 1. Clone
git clone https://github.com/prathmeshkulkarni/magic-portfolio.git
cd magic-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Add your keys (see table below)

# 4. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

| Variable | What it does |
|---|---|
| `GROQ_API_KEY` | AI chat widget — free at [console.groq.com](https://console.groq.com) |
| `GMAIL_USER` | Gmail address used to send contact form emails |
| `GMAIL_APP_PASSWORD` | Gmail app password (not your login password) |

---

## About Me

I'm Prathmesh Kulkarni — MS student at **Johns Hopkins University** and AI PM Intern at **CounselAI** in Baltimore. I work at the intersection of AI and product, building LLM workflows, agentic systems, and data pipelines that solve real problems.

Before this, I spent 3 years as a Software Development Engineer at **Druva Data Solutions** (Pune), shipping APIs and security features used by enterprise clients globally.

Outside work: I finished **Ironman 70.3 Bahrain** (1.9km swim · 90km bike · 21.1km run).

---

*Template base: [Once UI Magic Portfolio](https://once-ui.com/products/magic-portfolio)*
