const chatGptApiKey = process.env.CHATGPT_API_KEY;

export const sendToChatGPT = async (message: string[]) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${chatGptApiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.'
          },
          {
            role: 'user',
            content: `Make me a haiku based on ${message.join(",")}`
          }],
      }),
    });

    const data = await response.json();
    const { choices } = data;
    if (choices && choices.length > 0) {
      const reply = choices[0].message.content;
      console.log('ChatGPT reply:', reply);
      return reply;
    }
  } catch (error) {
    console.error('Error:', error);
  }
};