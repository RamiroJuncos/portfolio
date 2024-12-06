import Gif from "../assets/contacto-gif.gif"


function Contact() {
  return (
    <div className="contact-container relative min-h-screen bg-black flex flex-col justify-center items-center text-black font-mono overflow-hidden">
      <div className="absolute inset-0 z-0 matrix-rain"></div>
      <img src={Gif} alt="" className="w-90 h-90" />
      <h1 className="text-4xl md:text-5xl mb-6 neon-text">No dudes en contactarme!</h1>

      <p className="text-4xl md:text-5xl mb-8 tracking-widest text-center neon-text z-10"> <span className="neon-link">ramirog.juncos@gmail.com</span>
      </p>

      <p className="text-4xl md:text-5xl mb-8 tracking-widest text-center neon-text z-10">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/RamiroJuncos"
          className="neon-link hover-effect text-4xl md:text-5xl mb-8 tracking-widest text-center neon-text z-10"
        >
          <i className="fab fa-github"></i>
          Mi GitHub
        </a>
      </p>

      <p className="text-4xl md:text-5xl mb-8 tracking-widest text-center neon-text z-10">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ramiro-juncos-64035b303/"
          className="text-4xl md:text-5xl mb-8 tracking-widest text-center neon-text z-10"
        >
          <i className="fab fa-linkedin"></i>
          Mi Linkedin
        </a>
      </p>
    </div>
  );
}

export default Contact;
