import Image from 'next/image'
import Document, { Html, Head, Main, NextScript} from 'next/document'
import { useState, useEffect } from 'react';
import Photo12 from './photo12.jpg';
import Photo8 from './photo8.jpg';
import Photo5 from './photo5.jpg';
import Photo11 from './photo11.jpg';

const Rotator = () => {
   
   const [currentImage, setCurrentImage] = useState(0);
   var images = [Photo12];
   var counter = 0;
   var timer = [50, 1000]

   useEffect(() => {
        const intervalId = setInterval(() => {
           if (counter == 0){
             counter++;
             setCurrentImage(images[Math.floor(Math.random() * images.length)]);
           } else if (counter == 1) {
             counter++;
             setCurrentImage(images[Math.floor(Math.random() * images.length)]);
           } else {
              counter = 0;
              setCurrentImage(images[Math.floor(Math.random() * images.length)]);
           } 
        }, timer[0])
        
        return () => clearInterval(intervalId);
    }, [])

  return(
      <Image src={currentImage} height={50} width={200}/>
  )
  
}

export default Rotator
