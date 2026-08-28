import { NextRequest, NextResponse } from 'next/server';
import { askMaya, MayaContext } from '@/lib/maya-engine';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(request: NextRequest) {
  try {
    const context: MayaContext = await request.json();

    if (!context.question?.trim()) {
      return NextResponse.json(
        { error: 'question is required' },
        { status: 400 }
      );
    }

    const response = await askMaya(context);
    return NextResponse.json(response);
  } catch (err) {
    console.error('[Maya API]', err);
    return NextResponse.json(
      {
        message: "I couldn't process that question right now. Please try again.",
        confidence: 'not_verified',
        avatar: 'looking',
        quickActions: [],
        error: true,
      },
      { status: 500 }
    );
  }
}
