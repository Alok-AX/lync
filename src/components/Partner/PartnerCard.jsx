import React from 'react';

import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.png';
import partner3 from '../../assets/partner3.png';
import partner4 from '../../assets/partner4.png';
import partner5 from '../../assets/partner5.png';
import partner6 from '../../assets/partner6.png';
import partner7 from '../../assets/partner7.png';
import partner8 from '../../assets/partner8.png';

const partnerImages = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
];

export const PartnerCard = () => {
  return (
    <div className="partner_card_section">
      <div className="partner_card_wrap">
        {partnerImages.map((imageSrc, index) => (
          <img key={index} src={imageSrc} alt={`Partner ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
