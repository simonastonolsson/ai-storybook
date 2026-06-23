import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type StoryRequest = {
  idea?: unknown;
};

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Missing GEMINI_API_KEY. Add it to your .env.local file and restart the dev server.",
      },
      { status: 500 }
    );
  }

  let body: StoryRequest;
  try {
    body = (await request.json()) as StoryRequest;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body. Expected JSON." },
      { status: 400 }
    );
  }

  const idea = typeof body.idea === "string" ? body.idea.trim() : "";

  if (!idea) {
    return NextResponse.json(
      { error: "Please describe a memory or an idea first." },
      { status: 400 }
    );
  }

  if (idea.length > 2000) {
    return NextResponse.json(
      { error: "That idea is a bit too long. Please keep it under 2000 characters." },
      { status: 400 }
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = [
      "You are a warm, gentle storyteller who writes short, cozy bedtime stories for young children (ages 3-7).",
      "Write an original story based on the idea below.",
      "Guidelines:",
      "- Keep it short: about 250-400 words.",
      "- Use simple, warm, age-appropriate language with a calm, comforting tone.",
      "- Give the story a friendly title on the first line.",
      "- Include a gentle, positive message or feeling.",
      "- Keep everything kind and child-safe.",
      "",
      `Idea: ${idea}`,
    ].join("\n");

    const result = await model.generateContent(prompt);
    const story = result.response.text().trim();

    if (!story) {
      return NextResponse.json(
        { error: "The storyteller is quiet right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ story });
  } catch (error) {
    console.error("Failed to generate story:", error);
    return NextResponse.json(
      { error: "Something went wrong while writing your story. Please try again." },
      { status: 500 }
    );
  }
}
