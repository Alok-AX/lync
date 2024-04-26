import React from 'react'
import { PartnerCard } from '../components/Partner/PartnerCard'

const Partner = () => {
  return (
    <section className='partner_section'>
        <div className="container">
            <div className="partner_head">
                <h2>Our <span>Believers and Partners</span></h2>
            </div>
            <PartnerCard/>
        </div>

    </section>
  )
}

export default Partner