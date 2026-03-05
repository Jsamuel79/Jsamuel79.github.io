export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Samuel J.D.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide uppercase">
          Développeur Full-Stack
        </p>
        <p className="text-sm text-gray-500">
          La Réunion / Madagascar
        </p>
      </div>
    </main>
  );
}