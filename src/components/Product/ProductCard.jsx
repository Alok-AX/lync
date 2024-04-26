import React from 'react';
import suite1 from '../../assets/suite-1.png'

const ProductCard = () => {
  return (
    <div className='col-lg-4 col-md-6'>
        <div className="product_card_wrap">
            <img src={suite1} alt="suite" />
            <h5>LYNC Wallet SDK</h5>
            <p>Empowering developers to integrate
                account abstraction in their game,
                dapp, metaverse and more in
                minutes.
            </p>
        </div>

    </div>
  )
}

export default ProductCard