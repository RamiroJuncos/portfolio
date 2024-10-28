
function Home() {
  return (
    <div className="home-container relative min-h-screen bg-black flex flex-col justify-center items-center text-green-400 font-mono overflow-hidden">
      <div className="absolute inset-0 z-0 matrix-rain"></div>
      <h1 className="text-4xl md:text-5xl mb-4 neon-text">Bienvenido a mi Portfolio!</h1>
      <h2 className="text-2xl md:text-3xl neon-effect">Mi nombre es Ramiro Juncos</h2>
      <br />
      <p className="text-2xl md:text-3xl neon-effect">"Elige el rojo o el azul: yo elijo crear"</p>
    </div>
  );
}

export default Home;
