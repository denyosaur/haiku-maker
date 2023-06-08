import { chatGptAPIKey } from '../env';

export const sendToChatGPT = async (topics: string[]) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${chatGptAPIKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Make me a haiku based on ${topics.join(",")}`
          }],
      }),
    });

    const data = await response.json();
    const { choices } = data;
    if (choices && choices.length > 0) {
      const reply = choices[0].message.content;
      return reply;
    }
  } catch (err) {
    console.error('Error:', err);
  }
};