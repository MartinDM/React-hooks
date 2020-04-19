import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';
 
const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-187.jpg" secondaryImg="/static/speakers/Speaker-187.jpg" alt="" /> &nbsp;
      <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-1124.jpg" secondaryImg="/static/speakers/Speaker-1124.jpg"  alt="" /> 
      <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-1725.jpg" secondaryImg="/static/speakers/Speaker-1725.jpg"  alt="" /> 
      <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-823.jpg" secondaryImg="/static/speakers/Speaker-823.jpg"  alt="" /> 
    </div>
  );
}
 
export default ImageChangeOnMouseOver;