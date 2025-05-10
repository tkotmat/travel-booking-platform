const url = "";

const postRequest = async (modelUser) => {
    try {
        const response = await fetch(`${url}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(modelUser),
        });

        if (!response.ok) {
            throw new Error("POST request failed");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error during POST request:", error);
        throw error; // Re-throw the error for further handling if needed
    }
};

export { postRequest };
