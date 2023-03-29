import React from 'react';
import HeaderPages from '../../components/HeaderPages';
import Card from '../../components/Card';
import {plans} from '../../components/data';

function Plans() {

  const allPlans = plans.map((plan) => {
    return(
      <Card key={plan.id} className='plans__container-plan'>
        <h3 className='plans__container-plan--name'>{plan.name}</h3>
        <p className='plans__container-plan--desc'>{plan.desc}</p>
        <h1 className='plans__container-plan--price'>${plan.price}<span>/month</span></h1>
        <h4 className='plans__container-plan--features'>Features</h4>
        {
          plan.features.map((feature,index) => {
            return(
              <p key={index} className={!feature.available ? 'disabled' : 'enabled'}>{feature.feature}</p>
            )
          })
        }
        <button className='plans__container-plan--btn'>Choose Plan</button>
      </Card>
    )
  });

  return (
    <div className='plans'>
      <HeaderPages
        title='Membership Plans'
        text='Recusandae incidunt nobis totam dicta sunt, reiciendis assumenda iure repellat iusto esse.'
        image='./images/header_bg_4.jpg'
      />
      <div className='plans__container'>
        {allPlans}
      </div>
    </div>
  )
}

export default Plans
