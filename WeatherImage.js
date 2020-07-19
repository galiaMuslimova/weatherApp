import React from "react";
import cloud from './img/cloud.png';
import sun from './img/sun.png';
import rain from './img/rain.png';
import snow from './img/snow.png';
import clouds_sun from './img/clouds-sun.png';

const WeatherImage = ({ neighbourCity }) => {
    return (
        <div>
            {(neighbourCity.rain) ?
                (<img className='card-img-bottom' src={rain} alt='rain' />) :
                ((neighbourCity.snow) ?
                    (<img className='card-img-bottom' src={snow} alt='snow' />) :
                    ((neighbourCity.clouds.all >= 70) ?
                        (<img className='card-img-bottom' src={cloud} alt='cloud' />) :
                        ((neighbourCity.clouds.all >= 30) ?
                            (<img className='card-img-bottom' src={clouds_sun} alt='clouds_sun' />) :
                            (<img className='card-img-bottom' src={sun} alt='sun' />))))
            }
        </div>
    )
}

export default WeatherImage;
