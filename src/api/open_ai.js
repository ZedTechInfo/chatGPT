import axios from "axio";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = 'https://api.oepnai.com/v1/engines/davinci-codex/completions';

async function sendRequest(userText) {
    // const token = await AsyncStorage.getItem('api_key');

    const response = await axios.post(BASE_URL,
        {
            model: 'text-davinci-002', 
            prompt: userText,
            max_tokens: 50,
            temperature: 0.7
        },
        {
            headers: {
                'Authorisation': 'Bearer ${process.env.OPENAI_API_KEY}',
                'Content-Type': 'application/json'
            },
        }
    );
    return response.data.choices[0].text
}

export default {
    sendRequest,
};