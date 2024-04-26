import React from 'react';

import favChain1 from '../../assets/fav-chain-1.png';
import favChain2 from '../../assets/fav-chain-2.png';
import favChain3 from '../../assets/fav-chain-3.svg';
import favChain4 from '../../assets/fav-chain-4.png';
import favChain5 from '../../assets/fav-chain-5.png';
import favChain6 from '../../assets/fav-chain-6.png';
import favChain7 from '../../assets/fav-chain-7.png';
import favChain8 from '../../assets/fav-chain-8.png';

const imageSources = [
  favChain1,
  favChain2,
  favChain3,
  favChain4,
  favChain5,
  favChain6,
  favChain7,
  favChain8,
];

const FavoriteChainBrand = () => {
  return (
    <div className="favoritechain_brand_box">
      {imageSources.map((src, index) => (
        <div key={index} className="favoritechain_brand_box_img">
          <img src={src} alt={`Favorite chain brand ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default FavoriteChainBrand;
