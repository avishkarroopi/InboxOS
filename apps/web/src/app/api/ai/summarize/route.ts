import { Anthropic } from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { emailBody } = await request.json();
    
    if (!emailBody) return NextResponse.json({ error: "Missing emailBody" }, { status: 400 });

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 300,
      temperature: 0.2,
      system: "You are an elite executive assistant. Summarize emails in 2-3 short sentences. Identify urgency and extract clear action items if any. Keep it extremely professional and concise.",
      messages: [
        { role: 'user', content: `Summarize this email:\n\n${emailBody}` }
      ]
    });
    
    return NextResponse.json({ summary: (response.content[0] as any).text });
  } catch (error: any) {
    console.error("Claude summarize error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
