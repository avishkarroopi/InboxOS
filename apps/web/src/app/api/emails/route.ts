import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { GmailAdapter } from "@inbox-os/core";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const filter = searchParams.get('filter') || 'inbox';
  const gmailQuery = filter === 'starred' ? 'is:starred' : 'in:inbox';

  try {
    const adapter = new GmailAdapter({
      accessToken: session.accessToken,
      refreshToken: 'none', // NextAuth might handle this, or we just rely on active token
      expiresAt: 0,
    });

    const results = await adapter.listMessages({ query: gmailQuery, maxResults: 15 });
    
    // Convert Dates to strings for JSON serialization exactly as they appear over the wire
    const items = results.items.map(email => ({
      ...email,
      receivedAt: email.receivedAt.toISOString(),
    }));

    return NextResponse.json({ items });
  } catch (error: any) {
    console.error("Gmail fetch error:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch emails" }, { status: 500 });
  }
}
