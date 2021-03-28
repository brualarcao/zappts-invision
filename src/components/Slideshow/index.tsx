/* eslint-disable no-undef */
import AwesomeSlider from 'react-awesome-slider';
import './styles.css';
import firstImage from '../../assets/first-image.png';
import secondImage from '../../assets/second-image.png';
import thirtyImage from '../../assets/thirty-image.png';
import fourthImage from '../../assets/fourth-image.png';

const Slider: React.FC = () => (
  <>
    <AwesomeSlider
      infinite
      media={[
        {
          source: firstImage,
        },
        {
          source: secondImage,
        },
        {
          source: thirtyImage,
        },
        {
          source: fourthImage,
        },
      ]}
    />
    <div>
      <h1>Marcenas mattis egestas</h1>
      <h2>
        Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
        porta.
      </h2>
    </div>
  </>
);

export default Slider;
