import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../index.css'


export function Carrosel() {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
      setShowText(true);
    }, []);
  
    return (
        <div  class="h-screen mt-10 flex items-center justify-center">

<iframe
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        width="800"
        height="800"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL51ASgBo5cwnOz0ZSq67rO%2FUntitled%3Fpage-id%3D1%253A247%26type%3Ddesign%26node-id%3D1-248%26viewport%3D718%252C478%252C1.03%26t%3DLhD4ki73pxTLQGwe-1%26scaling%3Dscale-down%26mode%3Ddesign"
        allowFullScreen
      ></iframe>
    </div>
    //     <Swiper
    //         modules={[Navigation, Pagination, Autoplay]}
    //         navigation={true}
    //         autoplay={{delay: 3000}}
    //         pagination={{clickable:true}} 

           
    //     className="swiper-container h-screen w-1/4	 mt-16 rounded-2xl shadow-xl">
    //         <SwiperSlide className="slide-item ">
    //         <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-80 flex justify-center">
    //             <img src='./src/assets/Tenor.gif'/>
    //         </div>
    //         <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-center">
    //             <h1>Salto no tempo</h1>
                
    //             </div>
    //             <p className={`typewriter ${showText ? 'show' : ''}`}>
    //     No seriado, a infância de Chris se passa na década de 80, mas a do autor acontece em 1970. O salto no tempo foi explicado pelos produtores que disseram não querer concorrer com a sitcom "That '70s Show".
    //   </p>
    //         </SwiperSlide>
    //         <SwiperSlide className="slide-item">
    //         <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full flex justify-center">
    //             <img src='./src/assets/Estadão.jpeg'/>
    //         </div>
    //         <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-center">
    //             <h1>Slide 2</h1>
    //             </div>
    //         </SwiperSlide>
   

    //     </Swiper>
    );
}