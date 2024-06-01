import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe-item">
        <img src="/assets/img/about-me.png" />
      </div>
      <div className="aboutMe-item">
        <h1 className="title">About Me</h1>
        <p className="aboutMeContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          officiis sit debitis omnis harum sed veniam quasi dicta accusamus
          recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam tempora
          numquam sint odit optio.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          officiis sit debitis omnis harum sed veniam quasi dicta accusamus
          recusandae?
        </p>
      </div>
    </div>
  );
}
