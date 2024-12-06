import Foto from "../assets/foto-home.png"


function Home() {
  return (
    <div className="home-container relative min-h-screen bg-black flex flex-col justify-center items-center text-black font-mono overflow-hidden">
      <div className="absolute inset-0 z-0 matrix-rain"></div>
      <h1 className="text-4xl md:text-5xl mb-4 neon-text">Bienvenido a mi Portfolio!</h1>
      <img src={Foto} alt="" className="w-80 h-80" />
      <h2 className="text-2xl md:text-3xl neon-effect">Mi nombre es Ramiro Juncos</h2>
      <p className="text-2xl md:text-3xl neon-effect">"Elige el rojo o el azul: yo elijo crear"</p>
      <br />
      <footer className="absolute bottom-0 w-full py-4 bg-black text-center text-gray-500">
        <p> 2024 Ramiro Juncos | Desarrollador</p>
      </footer>
    </div>
    
  );
}

export default Home;
