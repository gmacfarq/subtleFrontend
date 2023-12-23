import { useNavigate } from 'react-router-dom';
import './Press.css';
/**
 * Press component
 * @module Contact
 * @exports Contact
 * @returns {JSX} The Contact component
 */
function Press() {

  function navToPress(url) {
    window.open(url, '_blank');
  }

  return (
    <div className="press-wrapper">
      <div>
        <h1>Subtle Orange in the Press</h1>
      </div>
      <div className='press-record'>
        <img className='press-image' src={`./images/fash.webp`} alt="fash" />
        <div className='text'>
          <h2><a href='https://www.fashionably-early.com/2023/11/20/subtle-orange-easier-said/' rel="noreferrer" target="_blank">Fashionably Early</a></h2>
          <p>Article - Easier Said</p>
        </div>
      </div>
      <div className='press-record'>
        <img className='press-image' src={`./images/scratch.webp`} alt="scratch" />
        <div className='text'>
          <h2><a href='https://www.scratch-zine.com/product/scratch-magazine-vol-3' rel="noreferrer" target="_blank">Scratch</a></h2>
          <p>Vol. 3</p>
        </div>
      </div>
      <div className='press-record'>
        <img className='press-image' src={`./images/offthecassette.webp`} alt="scratch" />
        <div className='text'>
          <h2>Off The Cassette</h2>
          <p>Artist Spotlight</p>
        </div>
      </div>

    </div>


  );
}

export default Press;