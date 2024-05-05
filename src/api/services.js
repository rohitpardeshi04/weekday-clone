export const fetchJobData = async (offset) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        limit: 10,
        offset: offset,
      }),
    };

    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      options
    );

    if (!response.ok) {
      throw new Error("Network Error");
    }

    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
