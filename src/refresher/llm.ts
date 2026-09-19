/**
 * One JSON-only LLM call, provider chosen by which key is present:
 *   DEEPSEEK_API_KEY  -> DeepSeek (deepseek-chat, OpenAI-compatible JSON mode)
 *   GROQ_API_KEY      -> Groq   (openai/gpt-oss-20b)
 * Override the model with LLM_MODEL. Callers never see which provider ran.
 */
import Groq from 'groq-sdk';

export function llmProvider(): 'deepseek' | 'groq' {
  if (process.env.DEEPSEEK_API_KEY) return 'deepseek';
  if (process.env.GROQ_API_KEY) return 'groq';
  throw new Error('Set DEEPSEEK_API_KEY or GROQ_API_KEY');
}

export async function chatJson(system: string, user: string): Promise<string> {
  const provider = llmProvider();

  if (provider === 'deepseek') {
    const res = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}` },
      body: JSON.stringify({
        model: process.env.LLM_MODEL || 'deepseek-chat',
        temperature: 0,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: `${system}\nRespond with a single JSON object.` },
          { role: 'user', content: user },
        ],
      }),
      signal: AbortSignal.timeout(45_000),
    });
    if (!res.ok) throw new Error(`DeepSeek HTTP ${res.status}: ${(await res.text()).slice(0, 160)}`);
    const j = await res.json();
    return j.choices?.[0]?.message?.content ?? '';
  }

  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY, timeout: 30_000, maxRetries: 2 });
  const res = await groq.chat.completions.create({
    model: process.env.LLM_MODEL || process.env.GROQ_MODEL || 'openai/gpt-oss-20b',
    temperature: 0,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
  });
  return res.choices[0]?.message?.content ?? '';
}
