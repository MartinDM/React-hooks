import React, {  useRef } from 'react';

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {

  //[ hovered, setHovered ] = useState(false);const imgRef = useRef(null)
  const imageRef = useRef(null);
  
  return (
    <img
    onMouseOver={ () => {  
      imageRef.current.src = secondaryImg } }
    onMouseOut={ () => {  imageRef.current.src = primaryImg } }
    src={primaryImg}
    ref={imageRef}
    />
  );
}
 
export default ImageToggleOnMouseOver;