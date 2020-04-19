import React, {  useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {

  //[ hovered, setHovered ] = useState(false);const imgRef = useRef(null)
  const imageRef = useRef(null);
  const [ isLoading, setLoading ] = useState(true)
  const [ inView, setInview ] = useState(false)

  useEffect( () => {

      // Return an event listener
      window.addEventListener('scroll', handleScroll);
      setInview( isInView() )
      setLoading(false)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }

  }, [ isLoading ])


  const isInView = () => {
    console.log(imageRef)
    if(imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  }

  const handleScroll = () => {
    setInview( () => {
      return isInView();
    })
  }
  
  // Ensure useEffect was run first to determine which image to use
  return isLoading ? null : (
    <img
    src={ inView ? secondaryImg : primaryImg }
    ref={imageRef}
    />
  );
}
 
export default ImageToggleOnScroll;