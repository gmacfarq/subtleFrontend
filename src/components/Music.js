import './Music.css';

function Music() {
  return (
    <>
      <div className="music-wrapper">
        <div className="links">
          <h1>Links</h1>
          <div className="sites">
            <a href="https://open.spotify.com/artist/60LsU7GzzmpYrDCLOUZOv4?si=7_0NZ25PR3OLZmr6R4RVqg"
              rel='noreferrer' target="_blank">
              <img className="site" src={`./images/spotify.png`} alt="spotify" />
            </a>
            <a href="https://music.apple.com/us/artist/subtle-orange/1276389179"
            rel='noreferrer' target="_blank">
              <img className="site" src={`./images/apple.png`} alt="apple" />
            </a>
            <a href="https://soundcloud.com/subtle-orange"
            rel='noreferrer' target="_blank">
              <img className="site" src={`./images/soundcloud.svg`} alt="soundcloud" />
            </a>
            <a href="https://www.youtube.com/channel/UCIjqjsg9XhQ6fscV0X7mOxw"
            rel='noreferrer' target="_blank">
              <img className="site" src={`./images/youtube.png`} alt="youtube" />
            </a>
            <a href="https://subtleorange.bandcamp.com/"
            rel='noreferrer' target="_blank">
              <img className="site" src={`./images/bandcamp.png`} alt="bandcamp" />
            </a>
          </div>
        </div>
        <div className="projects">
          <h1>Projects</h1>
          <div className="project-grid">
            <div className="project">
              <a href="https://open.spotify.com/album/3WHnvBnmGoyBFxPH9GYwvh?si=e-1SMurxRx2z-NWmC1T56Q" rel='noreferrer' target="_blank">
                <img className="project-image" src={`./images/easiersaid.webp`} alt="Easier Said" />
              </a>
              <h3>Easier Said</h3>
            </div>
            <div className="project">
              <a href="https://open.spotify.com/album/0zMJLZTZgw4oA6Qk8a4YWF?si=sL2ZpRSkSP2_QadGqBXIoA" rel='noreferrer' target="_blank">
                <img className="project-image" src={`./images/overthehill.jpg`} alt="Over the Hill" />
              </a>
              <h3>Over the Hill</h3>
            </div>
            <div className="project">
              <a href="https://open.spotify.com/album/5SR05nEdDWeOjpxf82aAIY?si=DNy35fI3TNeyjtYTTgpLiQ" rel='noreferrer' target="_blank">
                <img className="project-image" src={`./images/baileys.jpg`} alt="Bailey's" />
              </a>
              <h3>Bailey's</h3>
            </div>
            <div className="project">
              <a href="https://open.spotify.com/album/7gFlakCMrXkDmbDNjR557s?si=XK0sy2F7TXabgKS1Bjnf9w" rel='noreferrer' target="_blank">
                <img className="project-image" src={`./images/lacysplace.jpg`} alt="Lacy's Place" />
              </a>
              <h3>Lacy's Place</h3>
            </div>
            <div className="project">
              <a href="https://open.spotify.com/album/61ymtaiNfbSeqqdGCzFfzd?si=iGvRszwaQWO0ADGHR6_SSw" rel='noreferrer' target="_blank">
                <img className="project-image" src={`./images/sittingducks.jpg`} alt="Sitting Ducks" />
              </a>
              <h3>Sitting Ducks</h3>
            </div>
            <div className="project">
              <a href="https://open.spotify.com/album/5k4cu3RlzcLstZPuiMvdVu?si=a7vl28TtTQG2-uPA98Xbhw" rel='noreferrer' target="_blank">
                <img className="project-image" src={`./images/fruitpunch.jpg`} alt="Fruit Punch" />
              </a>
              <h3>Fruit Punch</h3>
            </div>
            <div className="project">
              <a href="https://open.spotify.com/album/4puFQFhzJeoHlJ3CBukRsn?si=hWAAZO5CRYqp9924-bSPEQ" rel='noreferrer' target="_blank">
                <img className="project-image" src={`./images/albion.jpg`} alt="Albion" />
              </a>
              <h3>Albion</h3>
            </div>
            <div className="project">
              <a href="https://open.spotify.com/album/6jNqWQgH4jm6TUUyuYwQaW?si=X_xP_28_QMu_2kvjLupjQg" rel='noreferrer' target="_blank">
                <img className="project-image" src={`./images/subtleorange.jpg`} alt="Subtle Orange" />
              </a>
              <h3>Subtle Orange</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;