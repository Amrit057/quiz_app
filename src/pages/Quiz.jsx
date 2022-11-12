import React, { useEffect, useState } from 'react';
import { getQuizData } from '../api';
import Loading from '../common/Loading';

const Quiz = () => {
    const [ques, setQues] = useState([]);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    useEffect(() => {
        getQuizData()
            .then((data) => {
                const questions = data.map((question) => ({
                    ...question,
                    answers: [question.correctAnswer, ...question.incorrectAnswers].sort(() => Math.random() - 0.5)
                }))
                setQues(questions);

            })
    }, [])
    const data = ques[index];

    const handleAnswer = (answer) => {
        if (!showAnswer) {
            if (answer === ques[index].correctAnswer) {
                setScore(score + 1);
            }
        }
        setShowAnswer(true);

    }

    const showNextQuestion = () => {
        setShowAnswer(false)
        setIndex(index + 1);
    }

    const playAgain = () => {
        window.location.reload();
    }



    return (
        ques.length > 0 ? (
            <div className='bg-cyan-300 h-screen flex items-center justify-center'>
                {index >= ques.length ? (
                    <div className='flex flex-col items-center gap-5'>
                        <h1 className='font-extrabold text-3xl'>Game Ended. Your score is <span className='text-orange-500'>{score}</span></h1>
                        <button className='bg-slate-300 w-32 font-bold hover:scale-105' onClick={playAgain}>Play Again</button>
                    </div>
                ) :
                    <div className='p-10 flex flex-col gap-4 items-center justify-center w-screen h-screen'>
                        <h1 className='font-bold text-2xl'>Questions: <span className='text-orange-500'>{index + 1}/{ques.length}</span></h1>
                        <h1 className='font-bold text-2xl'>Score: <span className='text-orange-500'>{score}</span></h1>
                        <h1 className='text-white -mb-8 bg-orange-400 z-10 p-1 rounded-lg'>{data.category}</h1>
                        <h1 className='font-bold text-3xl text-white bg-gray-400 p-8 rounded-3xl mb-5 w-11/12 text-center' >{data.question}</h1>
                        <div className='grid grid-cols-2 gap-5'>
                            {data.answers.map((answer) => {
                                return (
                                    <button
                                        className={`w-52 p-2 bg-gray-200 rounded-md ${showAnswer ? (answer === data.correctAnswer ? "bg-green-500" : "bg-red-500") : ""} hover:shadow-xl scale-105`}
                                        onClick={() => { handleAnswer(answer) }}
                                    >
                                        {answer}
                                    </button>
                                )
                            })}
                        </div>
                        <br />
                        <div className='w-52 h-20 text-center'>
                            {showAnswer && (<button className='bg-slate-400 p-2 rounded-sm font-bold hover:bg-orange-400' onClick={showNextQuestion}>Next Question</button>)}
                        </div>
                    </div>}
            </div >
        )
            : (<p><Loading /></p>)
    )

}


export default Quiz
