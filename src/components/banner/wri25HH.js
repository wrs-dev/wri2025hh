import Image from 'next/image';
import RegisterButton from '@/components/buttons/register-button';

const Banner2025HH = () => {
  return (
    <section className="relative w-full min-h-[350px] sm:min-h-[500px]">
      {/* 1. Hero background image */}
      <Image
        src="/kansas-city-skyline.webp"
        alt="home-banner"
        fill
        className="object-cover"
        quality={90} // Adjust as needed for clarity vs. performance
      />

      {/* 2. 30th Anniversary Logo as a separate absolutely positioned PNG */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8">
        <Image
          src="/30th-anniversary-logo-blk-200.png"
          alt="30th Anniversary Logo"
          width={245} 
          height={200}
          className="w-16 h-auto sm:w-20 md:w-24 lg:w-32"
          priority // optional: ensures logo loads quickly
        />
      </div>

      {/* 3. Centered text & register button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white sm:text-6xl text-shadow-outline">
          Kansas City, MO
        </h1>
        <h2 className="text-3xl font-bold text-white sm:text-6xl text-shadow-outline">
          June 10-12, 2025
        </h2>
        <div className="mt-4">
          <RegisterButton />
        </div>
      </div>
    </section>
  );
};

export default Banner2025HH;