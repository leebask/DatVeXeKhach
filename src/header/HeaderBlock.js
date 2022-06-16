import React from 'react'
import './HeaderBlock.css'

function HeaderBlock() {
  return (
    <div className="headerBlock">
        <div className="headerBlock__info"></div>
            <div className="headerBlock__infoText">
                <h1>Đặt xe online</h1>
                <h4>
                Hotline: <a className="hotline" href="tel:0336103086">0336103086</a>
                </h4>
            </div>
            <div className='headerBlock__actions'>
                <button className='headerBlock__btnPrimary'>Sài Gòn - Đắk Lắk</button>
                <button className='headerBlock__btnSecondary'>Đắk Lăk - Sài Gòn</button>
           </div>
    </div>
  )
}

export default HeaderBlock