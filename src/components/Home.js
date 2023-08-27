import './Home.css';
/**
 * Home component
 * @module Contact
 * @exports Contact
 * @returns {JSX} The Contact component
 */
function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <iframe
        className="youtube-iframe"
        src="https://youtube.com/embed/zAcHzmZj2-4?si=8W6sRpBtnPyyiU7E"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>

    </div>
  );
}

export default Home;