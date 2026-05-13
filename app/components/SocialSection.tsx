'use client';

import { SocialTooltip, SocialItem } from '@/components/ui/social-media';

export default function SocialSection() {
  const socialLinks: SocialItem[] = [
    {
      href: "#",
      ariaLabel: "X",
      tooltip: "X",
      color: "#F7931A",
      svgUrl: "https://svgl.app/library/x.svg",
    },
    {
      href: "#",
      ariaLabel: "Instagram",
      tooltip: "Instagram",
      color: "#F7931A",
      svgUrl: "https://svgl.app/library/instagram.svg",
    },
    {
      href: "#",
      ariaLabel: "TikTok",
      tooltip: "TikTok",
      color: "#F7931A",
      svgUrl: "https://svgl.app/library/tiktok.svg",
    },
  ];

  const images = [
    {
      id: 1,
      src: "https://picsum.photos/400/400?random=1",
      link: "#",
    },
    {
      id: 2,
      src: "https://picsum.photos/400/400?random=2",
      link: "#",
    },
    {
      id: 3,
      src: "https://picsum.photos/400/400?random=3",
      link: "#",
    },
  ];

  return (
    <section className="bg-black px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Social Buttons */}
        <div className="flex justify-center mb-16 md:mb-20">
          <SocialTooltip items={socialLinks} />
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image) => (
            <a
              key={image.id}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square overflow-hidden rounded-md cursor-pointer"
            >
              <img
                src={image.src}
                alt={`Gallery ${image.id}`}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
