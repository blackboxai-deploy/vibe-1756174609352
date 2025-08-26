export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Main Hello World Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg animate-pulse">
          Hello World
        </h1>
        
        {/* Welcome Message */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/30">
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
            Welcome to your beautiful Hello World page!
          </p>
          <p className="text-lg md:text-xl text-white/90 mt-4">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 mt-12">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </main>
  )
}