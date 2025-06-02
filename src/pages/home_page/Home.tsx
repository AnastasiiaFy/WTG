import React from 'react';
import BackgroundSpot from '../../components/background_spot/BackgroundSpot';
import Header from '../../components/header/Header';
import MainButton from '../../components/main_search_button/MainButton';
import InteractiveMap from '../../components/InteractiveMainMap/InteractiveMap'
import Footer from '../../components/footer/Footer'
import './Home.css';

const Home: React.FC = () => {

  const scrollToMapTitle = () => {
    const element = document.getElementById('choose-region');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const text = '\tWTG ваш надійний путівник у світі розважальних та освітніх подій з усієї України. Для вас тут щодня збираються найяскравіші події з усієї України — щоб ви більше не питали себе: «Куди піти цього тижня?» \n\n Хочеш на концерт? На фестиваль? А може, на крутий майстер-клас чи лекцію з кавою? Легко!\n\tШУКАЙ, ДІЛИСЬ З ДРУЗЯМИ, фільтруй, додавай в обране — і просто насолоджуйся від активного життя!\n\nОнлайн чи наживо — обирай місто, дату та формат, і вперед за враженнями.'

  return (
    <div className="home">
      <BackgroundSpot
        src="/top-right-spot.png"
        top="0"
        right="0"
        width="310px"
        transform="translateY(0px)"
      />
      <BackgroundSpot
        src="/left-red-spot.png"
        left="0"
        width="350px"
        transform="translateY(350px)"
      />
      <BackgroundSpot
        src="/bottom-right.png"
        bottom='0'
        right="0"
        width="400px"
        transform="translateY(0px)"
      />

      <Header />
  
      <div className="images-wrapper">
        <div className="images-container">
          <img src="/home_eyes.png" alt="Example" className="home-image" />
          <img src="/home_eyes.png" alt="Example" className="home-image" />
        </div>
        <h1 className="overlay-text">WHERE TO GO</h1>
      </div>
  
      <div className="description-text">
        <p className="desc-text-part">Фестивалі, концерти, виставки та ще більше – усе</p>
        <p className="desc-text-part">в одному місці, в твоєму місті.</p>
      </div>
  
      <div className="button-wrapper">
        <MainButton text="Знайти подію" onClick={scrollToMapTitle} />
      </div>
  
      <div className="map-wrapper">
        <h2 className="map-title" id="choose-region">ОБЕРІТЬ ПОТРІБНУ ОБЛАСТЬ</h2>
        <InteractiveMap />
      </div>
  
      <div className="about-us-rectangle" id="about-us">
        <h2 className="info-title">Про нас</h2>
        <pre className="about-us-text">
          {text}
        </pre>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;