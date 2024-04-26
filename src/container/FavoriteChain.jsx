import React from 'react'
import FavoriteChainBrand from '../components/FavoriteChain/FavoriteChainBrand'

const FavoriteChain = () => {
  return (
    <section className='fav_chain_section'>

        <div className="container">
            <div className="fav_chain_heading">
                <h2>With LYNC, build on your <br />
                    <span>favorite chain.</span>
                </h2>
            </div>
            <FavoriteChainBrand/>
            
        </div>

    </section>
  )
}

export default FavoriteChain