export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-3xl">
        <p className="font-[family-name:var(--font-montserrat)] text-[#F7931A] text-xs uppercase tracking-[0.2em] mb-8">
          Bitcoin Streetwear
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-[#F7931A] text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-[-0.02em]">
          Philosophy Over Profit
        </h1>
        <div className="h-1 w-24 bg-[#F7931A] mx-auto" />
      </div>
    </section>
  );
}
