import React from "react";


function Contact() {
  return (
    <div className="contact-container relative min-h-screen bg-black flex flex-col justify-center items-center text-green-400 font-mono overflow-hidden">
      <div className="absolute inset-0 z-0 matrix-rain"></div>
      <h1 className="text-4xl md:text-5xl mb-6 neon-text">Contacto</h1>
      
      <p className="text-4xl md:text-5xl mb-8 tracking-widest text-center neon-text z-10">
        Email: <span className="neon-link">ramirog.juncos@gmail.com</span>
      </p>

      <p className="text-4xl md:text-5xl mb-8 tracking-widest text-center neon-text z-10">
        Mi GitHub: 
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/RamiroJuncos"
          className="neon-link hover-effect text-4xl md:text-5xl mb-8 tracking-widest text-center neon-text z-10"
        >
          Click aquí
        </a>
      </p>

      <p className="text-4xl md:text-5xl mb-8 tracking-widest text-center neon-text z-10">
        Mi Linkedin: 
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ramiro-juncos-64035b303/"
          className="text-4xl md:text-5xl mb-8 tracking-widest text-center neon-text z-10"
        >
          Click aquí
        </a>
      </p>
    </div>
  );
}

export default Contact;
