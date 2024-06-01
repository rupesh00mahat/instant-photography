import React from 'react'
import '../assets/css/style.css';
import ShowcaseItem from './showcase-item';
import ShowcaseOne from '../assets/images/showcase-1.jpg';
import ShowcaseTwo from '../assets/images/showcase-2.jpg';
import ShowcaseThree from '../assets/images/showcase-3.jpg';
import ShowcaseFour from '../assets/images/showcase-4.jpg';

function Showcase(){
  return (
    <div id='showcase'>
<ShowcaseItem
image={ShowcaseOne}
firstText={'CATALOG'}
secondText={'SHOOT'}
/>
<ShowcaseItem
image={ShowcaseTwo}
firstText={'SWEET'}
secondText={'OCTOBER'}
/>
<ShowcaseItem
image={ShowcaseThree}
firstText={'CRUISE'}
secondText={'WORKSHOP'}
/>
<ShowcaseItem
image={ShowcaseFour}
firstText={'WEDDING'}
secondText={'PHOTOGRAPHY'}
/>
    </div>
  )
}

export default Showcase