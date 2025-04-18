import Image from 'next/image';
import Link from 'next/link';
import InfoZonePhotos from '@/components/infozone/infoZonePhotos';

const infoZoneSponsors = [
  {
    name: 'BosPac',
    description: '',
    imagePath: '/bosspac-logo.svg',
    url: 'https://bosspac.com/',
  },
  {
    name: 'Plasser American',
    description: '',
    imagePath: '/platinum-plasser-american.svg',
    url: 'https://www.plasseramerican.com/en/home/start',
  },
  {
    name: 'Linsinger',
    description: '',
    imagePath: '/silver-linsinger.png',
    url: 'https://www.linsinger.com/',
  },
  {
    name: 'Loram',
    description: '',
    imagePath: '/platinum-loram.svg',
    url: 'https://loram.com/',
  },
];

export default function InfoZonePage() {
  return (
    <div className="py-12 bg-white">
      {/* InfoZone Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-4 mb-12 md:grid-cols-5">
          {/* Image column */}
          <div className="flex justify-center md:col-span-1 md:justify-start">
            <Image
              src="/infozone-icon.png"
              alt="InfoZone Icon"
              width={200}
              height={100}
            />
          </div>
          {/* Text column */}
          <div className="md:col-span-4">
            <p className="mt-4 text-lg">
              The InfoZone is an interactive learning environment that is
              designed to augment the information presented at the annual Heavy
              Haul Seminar.
            </p>
            <p className="mt-4 text-lg">
              Our InfoZone partners offer high-quality technical information on
              the aspects of wheel/rail interaction that they know best. These
              sessions, which are built into the Heavy Haul Seminar program, are
              designed to provide small groups of approximately 30 delegates
              insight into the product or service that is the specialty of the
              presenting company. The goal is to promote a better understanding
              of the dynamic interaction between vehicles and track. This
              innovative concept has consistently received great reviews from
              participants and InfoZone Partners alike.
            </p>
          </div>
        </div>
      </section>

      <div className="seminar-about-text" id="sponsor">
        <div className="px-12 mx-auto">
          <h2 className="mb-16 text-6xl font-normal leading-normal text-center pt-11">
            Meet Your InfoZone Partners
          </h2>
        </div>
      </div>

      {/* Sponsors Section */}
      <section>
        <div className="px-6 mx-auto mb-48 max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 gap-y-12 gap-x-12 justify-items-center">
            {[infoZoneSponsors[0], infoZoneSponsors[2], infoZoneSponsors[1], infoZoneSponsors[3]].map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-32"
              >
                <img
                  src={sponsor.imagePath}
                  alt={`${sponsor.name} logo`}
                  className={`object-contain ${
                    sponsor.name === 'Linsinger' ? 'h-28' : 'h-16'
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* InfoZone Photos Section */}
      <section>
        <div className="flex items-center justify-center px-6 mx-auto mb-48 max-w-7xl lg:px-8">
          <InfoZonePhotos />
        </div>
      </section>
    </div>
  );
}
