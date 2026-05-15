import { Anthropic } from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { emailBody, senderName } = await request.json();
    
    if (!emailBody) return NextResponse.json({ error: "Missing emailBody" }, { status: 400 });

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 400,
      temperature: 0.4,
      system: "You are an intelligent email drafting assistant. Draft a highly professional, context-aware reply to the following email. Keep the tone concise, business-appropriate, and confident. Do not include subject lines or unnecessary boilerplate like 'Subject:' or placeholder brackets unless absolutely necessary.",
      messages: [
        { role: 'user', content: `Please draft a reply to this email from ${senderName || 'the sender'}:\n\n${emailBody}` }
      ]
    });
    
    return NextResponse.json({ draft: (response.content[0] as any).text });
  } catch (error: any) {
    console.error("Claude draft error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
