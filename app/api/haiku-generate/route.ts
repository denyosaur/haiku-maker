import { NextRequest, NextResponse } from "next/server";

import { sendToChatGPT } from '@/lib/sendToChatGPT';
import { createId } from '@/lib/createId';
import { writeToSanity } from '@/lib/writeToSanity';

export async function POST(request: NextRequest) {
  try {
    const { topics } = await request.json();

    const id = createId();
    const chatGptResult = await sendToChatGPT(topics);

    const haikuToSend = {
      id,
      haiku: chatGptResult,
      _type: 'haiku',
    };

    const sanityResult = await writeToSanity(haikuToSend);

    return NextResponse.json({ data: sanityResult, success: true });
  } catch (err) {
    throw err;
  }
}