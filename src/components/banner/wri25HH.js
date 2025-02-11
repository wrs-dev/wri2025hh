import Image from 'next/image';
import RegisterButton from '@/components/buttons/register-button';

const Banner2025RT = () => {
  return (
    <section className="relative w-full min-h-[350px] sm:min-h-[500px]">
      <Image
        src="/kansas-city-skyline.webp"
        alt="home-banner"
        fill
        className="object-cover"
        quality={100}
      />
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

export default Banner2025RT;
