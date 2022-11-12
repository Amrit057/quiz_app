import React from 'react'

const Button = () => {

  ques.length > 0 ? (
    <div className='bg-cyan-300 h-screen flex items-center justify-center'>
      {index >= ques.length ? (<h1 className='text-white'>Game Ended. Your score is {score}</h1>) :
        <div className='p-10 flex flex-col gap-4 items-center'>
          {/* <h1 className='text-white'>{score}</h1> */}
          <h1 className='text-white'>Questions: {index + 1}/{ques.length}</h1>
          <h1 className='text-white'>{ques[index].category}</h1>
          <h1 className='font-bold text-3xl text-white bg-gray-400 p-8 rounded-3xl mb-5 w-fit' >{ques[index].question}</h1>
          <div className='grid grid-cols-2 gap-5'>
            {/* {answers.map((answer)=> <button
                  id='test'
                  className='p-2 bg-gray-200 rounded-md border-2'
                  // style={isStyle}
                  onClick={handleAnswer(ques[index].answers[0])}>{ques[index].answers[0]}

              </button> )} */}
            <button
              id='test'
              className='p-2 bg-gray-200 rounded-md border-2'
              // style={isStyle}
              onClick={handleAnswer}
            >
              {ques[index].answers[0]}

            </button>
            <button
              id='test'
              className='p-2 bg-gray-200 rounded-md border-2'
              // style={isStyle}
              onClick={handleAnswer}>{ques[index].answers[1]}
            </button>
            <button
              id='test'
              className='p-2 bg-gray-200 rounded-md border-2'
              // style={isStyle}
              onClick={handleAnswer}>{ques[index].answers[2]}
            </button>
            <button
              id='test'
              className='p-2 bg-gray-200 rounded-md border-2'
              // style={isStyle}
              onClick={handleAnswer}>{ques[index].answers[3]}
            </button>

          </div>
        </div>}
      {/* <p onClick={next}>Next</p> */}
    </div >
  )
    : (<p><Loading /></p>)

}

export default Button