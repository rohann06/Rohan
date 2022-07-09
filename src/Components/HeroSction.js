import "./HeroSection.css"
//Images
import img from "../images/my_img.png";
import tweeter from "../images/tweeter.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png"


const Hrosecton = () => {
    return ( 
        <div className="hero-section">
          <div className="deceription">
            <h1 className="heading">
              Hi!
              <img
                src="https://raw.githubusercontent.com/nixin72/nixin72/master/wave.gif"
                alt="gif"
                height="35"
                width="35"
              />
              I'm <br/> <h1 id="name">Rohan</h1>
            </h1>

            <p>
              An inspiring full-stack web3 dev...🔗🚀 </p>
              <p>who used to be a data analyst.📈
            </p>
          </div>

          <div className="images">
            <img id="My_img" src={img} alt="my_img" />
            <div className="contacts">

              <a  href="https://twitter.com/Rohan651">
                <img id="tw" src={tweeter} alt="" />
              </a>

              <a href="https://github.com/rohanA6">
                <img id="gh" src={github} alt="" />
              </a>

              <a href="https://www.linkedin.com/in/rohan-ahire-652001/">
                <img id="in" src={linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
     );
}
 
export default Hrosecton;