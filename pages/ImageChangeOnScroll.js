import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll= () => {
  return (
    <div>
    {/* Speaker ids */}
    { [1124, 187, 1725, 823 ] 
      .map( (p, i) => <ImageToggleOnScroll key={i} primaryImg={`/static/speakers/bw/Speaker-${p}.jpg`} secondaryImg={`/static/speakers/Speaker-${p}.jpg`} alt="" /> )
    }
    </div>
  );
}
 
export default ImageChangeOnScroll;