export default function SocialSection() {
  const socialPosts = [
    {
      platform: 'Instagram',
      link: 'https://instagram.com/satoshi.styles',
      caption: 'Latest collection',
      emoji: '📸'
    },
    {
      platform: 'Instagram',
      link: 'https://instagram.com/satoshi.styles',
      caption: 'Community vibes',
      emoji: '👥'
    },
    {
      platform: 'Instagram',
      link: 'https://instagram.com/satoshi.styles',
      caption: 'Bitcoin philosophy',
      emoji: '₿'
    }
  ];

  return (
    <section className="bg-black px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-montserrat)] text-[#888888] text-xs uppercase tracking-[0.2em]">
            — Follow Us —
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black border border-white/10 p-6 hover:border-[#F7931A] transition-all duration-200 cursor-pointer"
            >
              {/* Placeholder Image Area */}
              <div className="bg-white/5 aspect-square mb-6 flex items-center justify-center text-4xl">
                {post.emoji}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-[family-name:var(--font-cormorant)] text-white text-lg font-bold">
                  {post.platform}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-[#888888] text-sm leading-relaxed">
                  {post.caption}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="mt-4 text-[#F7931A] text-xs uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                View on Instagram →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
