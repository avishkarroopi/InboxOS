import { Anthropic } from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { emailBody, subject, senderName } = await request.json();
    
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 50,
      temperature: 0,
      system: "You are a prioritization engine. Analyze the email and respond with exactly ONE word from this list: low, medium, high, urgent. Base your decision on sender importance, deadlines, and business intent. Give no explanation.",
      messages: [
        { role: 'user', content: `From: ${senderName}\nSubject: ${subject}\n\n${emailBody}` }
      ]
    });
    
    let tier = (response.content[0] as any).text.trim().toLowerCase();
    if (!['low', 'medium', 'high', 'urgent'].includes(tier)) {
      tier = 'medium'; // fallback
    }
    
    return NextResponse.json({ tier });
  } catch (error: any) {
    console.error("Claude prioritize error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
