import React from 'react'

const Question = ({ questions, index, handleAnswer, showAnswers, handleNextQuestion, data:{category, question, answers, correctAnswers, } }) => {
    return (
        <>
            <div className='p-10 flex flex-col gap-4 items-center'>
                <h1 className='text-white'>Questions: {index + 1}/{questions.length}</h1>
                <h1 className='text-white'>{category}</h1>
                <h1 className='font-bold text-3xl text-white bg-gray-400 p-8 rounded-3xl mb-5 w-fit' >{question}</h1>
                <div className='grid grid-cols-2 gap-5'>
                    {answers.map((answer, index) => {
                        return (
                            <button
                                className='p-2 bg-gray-200 rounded-md border-2'
                                onClick={handleAnswer(answer)}
                            >
                                {answer}
                            </button>
                        )
                    })}



                </div>
            </div>

        </>
    )


}

export default Question