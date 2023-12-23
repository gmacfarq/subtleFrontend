import './Home.css';
/**
 * Home component
 * @module Contact
 * @exports Contact
 * @returns {JSX} The Contact component
 */
function Home() {
  return (
    <div className="home-wrapper">
      <div>
        <h1>Welcome Home</h1>
        <p>find the latest stuff here</p>
      </div>
      <iframe
        title="spotify-iframe"
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/album/3WHnvBnmGoyBFxPH9GYwvh?utm_source=generator"
        width="90%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
      <iframe
        className="youtube-iframe"
        src="https://www.youtube.com/embed/zAcHzmZj2-4"
        title="Stream Bailey’s anywhere! #music #band #indie #rock"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
  );
}

export default Home;