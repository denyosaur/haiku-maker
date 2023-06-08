import { sendToChatGPT } from './sendToChatGPT';
import { createId } from './createId';
import { writeToSanity } from './writeToSanity';

export const apiRequests = async (topics: string[]) => {
  try {
    const id = createId();
    const chatGptResult = await sendToChatGPT(topics);

    const haikuToSend = {
      id,
      haiku: chatGptResult,
      _type: 'haiku',
    };

    const sanityResult = await writeToSanity(haikuToSend);

    return sanityResult;
  } catch (err) {
    console.error('Error:', err);
  }
};
