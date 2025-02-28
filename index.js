const api_url = "https://zenquotes.io/api/random"

async function getMotivationalMessage(api_url) {
    try {
        const response = await fetch(api_url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();

        const motivationalMessage = data[0].q

        console.log(motivationalMessage)
    } catch (error) {
        console.error(error)
    }
}

getMotivationalMessage(api_url)