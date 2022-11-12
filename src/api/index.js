import axios from "axios";



export const getQuizData = async() => {
    try {
        const {data} = await axios.get('https://the-trivia-api.com/api/questions?limit=5')
        return data;
    } catch (error) {
        console.log(error)
    }
}