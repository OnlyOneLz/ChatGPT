export const apiFetch = async (token) => {
  try {
    const response = await fetch(
      `https://chatgpt-production-13b9.up.railway.app/protected`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data.userId;
  } catch (error) {
    console.error("Error adding message", error);
  }
};

export default apiFetch;
