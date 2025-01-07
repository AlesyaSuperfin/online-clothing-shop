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
    <div className='advertising_container'>
    <img className='banner' src={`${image}.jpg`} alt="img_banner"/>
        <div className='button_container'>
        <button className='btn_banner btn_previous' onClick={previousBanner}><span>ᐸ</span></button>
        <button className='btn_banner btn_next' onClick={nextBanner}><span>ᐳ</span></button>
        </div>
    </div>
  )
}

export default AdvertisingBanner;