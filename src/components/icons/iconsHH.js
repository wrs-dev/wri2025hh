import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

const IconLinksHH = () => {
  const router = useRouter();

  const icons = useMemo(
    () => [
      {
        href: '#',
        src: '/principles-icon.svg',
        title: 'Principles Course',
        date: 'June 10, 2025',
        hoverBorderColor: 'hover:border-wri-yellow',
        hoverBgColor: 'hover:bg-wri-green',
      },
      {
        href: '#',
        src: '/heavy-haul-icon.svg',
        title: 'Heavy Haul Seminar',
        date: 'June 11-12, 2025',
        hoverBorderColor: 'hover:border-wri-blue',
        hoverBgColor: 'hover:bg-wri-red',
      },
    ],
    [],
  );

  const getRestingBackgroundColor = useMemo(() => {
    if (router.pathname.includes('principles-course')) {
      return ['bg-wri-green', 'bg-wri-neutral']; // Green always visible, red neutral
    } else if (router.pathname.includes('heavy-haul')) {
      return ['bg-wri-neutral', 'bg-wri-red']; // Red always visible, green neutral
    }
    return ['bg-wri-neutral', 'bg-wri-neutral']; // Default to all neutral
  }, [router.pathname]);

  return (
    <div className="btn_wrapper" data-aos="fade-up" id="icons">
      <div className="container">
        <ul className="flex flex-wrap">
          {icons.map((icon, index) => (
            <Link href={icon.href} key={icon.href}>
              <li
                className={`border-2 border-white shadow-lg ${getRestingBackgroundColor[index]} ${icon.hoverBorderColor} ${icon.hoverBgColor}`}
              >
                <figure>
                  <Image
                    src={icon.src}
                    width={180}
                    height={100}
                    alt={icon.title.toLowerCase()}
                    className="w-full"
                  />
                </figure>
                <div className="text">
                  <h4 className="text-2xl font-bold text-white">
                    {icon.title}
                  </h4>
                  <p className="text-2xl font-normal text-white">{icon.date}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconLinksHH;
