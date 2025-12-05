import React from 'react';
import BottomBorder from '../BottomBorder';
import Badge from '../Badge';
import camera from '@/assets/camera.svg';
import cameraIcon from '@/assets/camera_icon.svg';
import CopyAnimation from '../CopyAnimation';
import cursor from '@/assets/cursor.svg';

const Optics = () => {
  const photos = [
    {
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop',
      category: 'COOPERATE',
      credit: 'Onidiri',
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop',
      category: 'CULTURE',
      credit: 'Onidiri',
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
      category: 'PORTRAIT',
      credit: 'Onidiri',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop',
      category: 'PORTRAIT',
      credit: 'Onidiri',
    },
  ];
  return (
    <section className="relative py-32 bg-[#05070C]">
      <div className="page-guard-rail relative z-20">
        {/* Optics Badge with Lines */}
        <div className="mb-16">
          <Badge text="OPTICS" icon={cameraIcon} showLines={true} />
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <CopyAnimation>
            <h2
              className="text-[2rem] md:text-[3.5rem] leading-tight font-medium text-white"
              style={{ fontFamily: 'var(--font-family-satoshi)' }}
            >
              Off the clock, I trade code for a camera{' '}
              <img src={camera} alt="Camera" className="inline-block w-12 h-12 md:w-16 md:h-16" />{' '}
              <br /> — here are a{' '}
              <span
                className="italic text-[#7A8090]"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                few shots
              </span>
            </h2>
          </CopyAnimation>
        </div>

        {/* Photo Marquee */}
        <div className="relative overflow-hidden mb-16">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {/* First set of photos */}
            {photos.map((photo, index) => (
              <div
                key={`first-${index}`}
                className="inline-block flex-shrink-0 rounded-[2rem] p-[0.47px]"
                style={{
                  background:
                    'linear-gradient(177.74deg, #4479FF 3.91%, #1A2A53 29.25%, #152A60 98.28%)',
                }}
              >
                <div
                  className="relative rounded-[2rem] overflow-hidden bg-[#05070C] p-2"
                  style={{ width: '31.375rem' }}
                >
                  {/* Image with corner brackets */}
                  <div className="relative">
                    {/* Corner Brackets on image border */}
                    <div className="absolute inset-0 pointer-events-none z-10">
                      <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white/40" />
                      <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-white/40" />
                      <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-white/40" />
                      <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white/40" />
                    </div>

                    <div className="relative w-full h-[28.375rem] overflow-hidden group rounded-[1.5rem]">
                      <img
                        src={photo.image}
                        alt={`Photography ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Bottom info bar */}
                  <div className="flex items-center justify-between px-4 py-4 bg-[#05070C]">
                    <span
                      className="text-white/70 text-sm"
                      style={{ fontFamily: 'var(--font-family-satoshi)' }}
                    >
                      {photo.credit}
                    </span>
                    <div className="flex items-center gap-4">
                      {photo.category && (
                        <span
                          className="px-4 py-2 rounded-full text-white text-[0.77rem] font-medium tracking-wider uppercase"
                          style={{
                            fontFamily: 'var(--font-family-satoshi)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid transparent',
                            backgroundImage:
                              'linear-gradient(#272D3D, #272D3D), linear-gradient(to bottom, #7A9DF7, #24272E, #24272E)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box',
                          }}
                        >
                          {photo.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {photos.map((photo, index) => (
              <div
                key={`second-${index}`}
                className="inline-block flex-shrink-0 rounded-[2rem] p-[0.47px]"
                style={{
                  background:
                    'linear-gradient(177.74deg, #4479FF 3.91%, #1A2A53 29.25%, #152A60 98.28%)',
                }}
              >
                <div
                  className="relative rounded-[2rem] overflow-hidden bg-[#05070C] p-2"
                  style={{ width: '31.375rem' }}
                >
                  {/* Image with corner brackets */}
                  <div className="relative">
                    {/* Corner Brackets on image border */}
                    <div className="absolute inset-0 pointer-events-none z-10">
                      <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white/40" />
                      <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-white/40" />
                      <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-white/40" />
                      <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white/40" />
                    </div>

                    <div className="relative w-full h-[28.375rem] overflow-hidden group rounded-[1.5rem]">
                      <img
                        src={photo.image}
                        alt={`Photography ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Bottom info bar */}
                  <div className="flex items-center justify-between px-4 py-4 bg-[#05070C]">
                    <span
                      className="text-white/70 text-sm"
                      style={{ fontFamily: 'var(--font-family-satoshi)' }}
                    >
                      {photo.credit}
                    </span>
                    <div className="flex items-center gap-4">
                      {photo.category && (
                        <span
                          className="px-4 py-2 rounded-full text-white text-[0.77rem] font-medium tracking-wider uppercase"
                          style={{
                            fontFamily: 'var(--font-family-satoshi)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid transparent',
                            backgroundImage:
                              'linear-gradient(#272D3D, #272D3D), linear-gradient(to bottom, #7A9DF7, #24272E, #24272E)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box',
                          }}
                        >
                          {photo.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description and Gram Button */}
        <div className="text-center max-w-[50rem] mx-auto mb-16">
          <CopyAnimation>
            <p
              className="text-[1rem] md:text-[1.25rem] leading-relaxed text-white mb-8"
              style={{ fontFamily: 'var(--font-family-satoshi)' }}
            >
              With or without camera, always capturing moments - check{' '}
              <span
                className="italic text-[#7A8090]"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                'gram
              </span>{' '}
              for the{' '}
              <span
                className="italic text-[#7A8090]"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                good stuff.
              </span>
            </p>
          </CopyAnimation>

          {/* Gram Button */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-[1.125rem] text-white font-medium transition-transform hover:scale-105"
            style={{
              width: '15.625rem', // 250px
              height: '3.4375rem', // 55px
              padding: '0.125rem', // 2px
              background: '#061227',
              border: '0.57px solid #0376FC',
              boxShadow:
                'inset 0px -9px 15.9px 0px #123A73, inset 0px 4px 18.8px 0px #1D4782, inset 0px -3px 20.2px 0px #093C81',
              fontFamily: 'var(--font-family-satoshi)',
              fontSize: '1.125rem', // 18px
            }}
          >
            <img src={cursor} alt="Cursor" className="w-6 h-6" />
            <span>See more on 'Gram</span>
          </a>
        </div>
      </div>
      <BottomBorder />
    </section>
  );
};

export default Optics;
