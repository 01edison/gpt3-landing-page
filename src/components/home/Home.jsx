import Navbar from "./../navbar/Navbar";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <div className="row">
          <div className="left__side col">
            <h2 className="content__heading">
              Let's Build Something amazing with GPT-3 OpenAI
            </h2>

            <p className="content__paragraph">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thought all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>

            <div className="form__container">
              <input placeholder="Your Email Address"/>
              <button>Get Started</button>
            </div>
          </div>
          <div className="right__side col">
            <img src="/Illustration.png" className="header__image"/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
