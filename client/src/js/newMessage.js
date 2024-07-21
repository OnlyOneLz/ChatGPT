export const newMessage = async (role, userId, conversationId, message) => {
  try {
    const response = await fetch(
      `https://chatgpt-production-13b9.up.railway.app/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: role,
          userId: userId,
          conversationId: conversationId,
          message: message,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error adding message", error);
  }
};

export default newMessage;
