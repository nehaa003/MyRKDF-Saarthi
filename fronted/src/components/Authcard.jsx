export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-md rounded-2xl p-8
      bg-white/10 backdrop-blur-xl
      border border-white/20
      shadow-[0_0_40px_rgba(255,120,0,0.25)]">

      <h1 className="text-3xl font-bold text-center
        bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300
        bg-clip-text text-transparent">
        {title}
      </h1>

      <p className="text-center text-gray-300 mt-2 text-sm">
        {subtitle}
      </p>

      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}
