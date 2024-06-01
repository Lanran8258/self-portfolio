import "./Hero.css";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div
      className="hero"
      id="hero"
    >
      <div className="hero-content">
        <div className="hero-text">
          <p>
            <b>Hey, I'm John</b>
          </p>
          <h1>
            Full Stack
            <br />
            Developer
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            quas. Amet soluta assumenda cum?
          </p>
        </div>
        <div className="btn-getInTouch">
          <button>
            <Link
              type="button"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={500}
            >
              Get In Touch
            </Link>
          </button>
        </div>
      </div>
      <div className="hero-pic">
        <img src="/assets/img/hero_img.png" />
      </div>
    </div>
  );
}
