import React from 'react'
import FAQ from './FAQ';
import {FaQuestion} from 'react-icons/fa'
import {faqs} from './data';

function FAQs() {

const allFaqs = faqs.map((faq) => {
    return(
        <FAQ key={faq.id}
            question={faq.question}
            answer={faq.answer}
        />
    )
})

return (
    <div className='faqs'>
      <div className='faqs__header'>
        <span className='faqs__header-icon'><FaQuestion /></span>
        <h2 className='faqs__header-title'>FAQs</h2>
      </div>
      <div className='faqs__wrapper'>
        {allFaqs}
      </div>
    </div>
  )
}

export default FAQs
