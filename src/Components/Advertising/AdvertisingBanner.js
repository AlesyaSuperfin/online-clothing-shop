import { useState } from 'react';
import BannerData from "../../Data/BannerData";

const AdvertisingBanner = () => {
    const [banner, setBanner] = useState (0);
    const {image} = BannerData[banner]

    const previousBanner = () => {
        setBanner((banner =>{
          banner --;
          if (banner < 0) {
            return BannerData.length -1;
          }
          return banner;
        }))
      }
    
      const nextBanner = () => {
        setBanner((banner =>{
        banner ++;
        if (banner > BannerData.length -1) {
          banner = 0;
        }
        return banner;
      }))
      }

  return (
    <div>
    <div>
        {BannerData.map((banner) => {
            const {id, image} = banner;
            return (
            <img src={`./${banner.image}.jpg`} alt='banner' className='banner' />
            )
        })}
    </div> 
    <button onClick={previousBanner}>Previous</button>
    <button onClick={nextBanner}>Next</button>
    </div>
  )
}

export default AdvertisingBanner;