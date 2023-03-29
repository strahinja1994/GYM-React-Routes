import React from 'react';
import {AiOutlinePlus, AiOutlineMinus, AiOutlineAim} from 'react-icons/ai';

function FAQ(props) {

  const [showAnswer, setShowAnswer] = React.useState(false);

  function changeShowAnswer() {
    setShowAnswer(showAnswer => !showAnswer)
  }

  return (
    <div className='faq' onClick={changeShowAnswer}>
        <div className='faq__question'>
        <h4 className='faq__question-title'>{props.question}</h4>
        <button className='faq__question-button'>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <p className={showAnswer ? 'faq__answer' : 'faq__answer-closed'}>{props.answer}</p>
    </div>
  )
}

export default FAQ
