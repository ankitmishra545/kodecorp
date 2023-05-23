import React, { useContext} from 'react'

function Reviews() {
  return (
    // <div className='linksContent'>
      <div className='accordian' id='accordianExample'>
        <div className='accordian-item'>
          <h2 className='accordian-header'>
            <button type='button' className='accordian-button' data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded='true' area-aria-controls='collapseOne'>#</button>
          </h2>
          <div className='accordian-collapse collapse show' id='collapseOne' data-bs-parent='#accordianExample'>
            <div className='accordian-body'>
              <strong>Accordian jkdk dkjkf kfjhf kjffkjf</strong> fjj            
            </div>
          </div>
        </div>
      </div>    
    // </div>
  )
}

export default Reviews