import Image from 'next/image';
import Link from 'next/link';

const pearlSponsors = [
  {
    name: 'Plasser American',
    description: 'Plasser American provides track maintenance solutions and machines, leading innovation in the railway construction and maintenance sector.',
    imagePath: '/platinum-plasser-american.svg',
    url: 'https://plasseramerican.com/',
  },
];

const platinumSponsors = [
  {
    name: 'Loram',
    description:
      'For more than 70 years, Loram has been providing railroad maintenance equipment and services to freight, passenger and transit railroads. Loram’s reputation rests on our performance as a contractor offering a wide range of track maintenance services:',
    imagePath: '/platinum-loram.png',
    url: 'https://loram.com/',
    bullets: [
      'Production and specialty rail grinding',
      'Ditch cleaning',
      'Shoulder ballast cleaning',
      'Undercutting',
      'Spot undercutting utilizing our LRV',
      'Rail handling',
      'Full service friction management',
      'Track lifting',
      'Geotechnical substructure management',
      'Track Inspection',
      'Material Handling',
      'Structural monitoring and data services',
    ],
  },
];

const goldSponsors = [
  {
    name: 'Holland',
    description: '',
    imagePath: '/gold-holland.png',
    url: 'https://www.hollandco.com/',
  },
  {
    name: 'Gateway Rail Services',
    description: '',
    imagePath: '/gold-gateway-rail-services.png',
    url: 'https://gatewayrailservices.com/',
  },
  {
    name: 'Wabtec',
    description: '',
    imagePath: '/silver-wabtec.png',
    url: 'https://www.wabteccorp.com/',
    extraClass: 'mb-4', // 👈 add this
  },
  {
    name: 'ENSCO',
    description: '',
    imagePath: '/platinum-ensco.jpg',
    url: 'https://www.ensco.com/rail',
    extraClass: 'mb-4', // 👈 add this
  },
];

const silverSponsors = [
  {
    name: 'Getzner',
    description: '',
    imagePath: '/getzner-logo.png',
    url: 'https://www.getzner.com/en',
  },
];

const bronzeSponsors = [
  {
    name: 'Steel Dynamics, Inc. (SDI)',
    description: '',
    imagePath: '/bronze-steel-dynamics.png',
    url: 'https://www.steeldynamics.com/',
  },
  {
    name: 'LB Foster',
    description: 'Providing rail and infrastructure solutions that include rail products, friction management, and transit systems.',
    imagePath: '/silver-lbfoster.png',
    url: 'https://lbfoster.com/',
  },
];

export default function SponsorPage() {
  return (
    <div className="pt-12 pb-24 bg-white sm:py-32">

      {/* Pearl Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-wri-pearl-gold">PEARL MILESTONE</span> sponsor
            </h2>
            <div className="flex flex-col col-span-2">
              {pearlSponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex flex-col mb-8">
                  <div className="mb-4">
                    <img
                      src={sponsor.imagePath}
                      alt={sponsor.name}
                      className="max-w-[50%] mx-auto lg:mx-0"
                    />
                  </div>
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:underline"
                  >
                    Visit the {sponsor.name} website
                  </a>
                  <p className="mt-1 mb-2 text-base leading-7">
                    {sponsor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Platinum Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 sm:gap-y-20 lg:gap-8">
            <h2 className="col-span-1 mt-12 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-zinc-500">PLATINUM</span> sponsors
            </h2>
            <div className="col-span-2 lg:col-span-2">
              {/* Map over the rest of the platinum sponsors */}
              {platinumSponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex flex-col mb-8">
                  <div className="mb-4">
                    <img
                      src={sponsor.imagePath}
                      alt={sponsor.name}
                      className="max-w-[50%] mx-auto lg:mx-0"
                    />
                  </div>
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:underline"
                  >
                    Visit the {sponsor.name} website
                  </a>
                  <p className="mt-1 mb-2 text-base leading-7">
                    {sponsor.description}
                  </p>
                  {sponsor.bullets && sponsor.bullets.length > 0 && (
                    <div className="mb-12">
                      {sponsor.bullets.map((bullet, index) => (
                        <p className="py-1 pl-6" key={index}>
                          &#8226; {bullet}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Gold Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-yellow-600">GOLD</span> sponsors
            </h2>
            <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2 place-items-start">
              {goldSponsors.map((sponsor) => (
                <div key={sponsor.name}>
                  <dt className="text-base font-semibold leading-7 text-black">
                    <div className="flex items-center h-22">
                      <img
                        src={sponsor.imagePath}
                        alt={sponsor.name}
                        className={`max-h-20 img-fill-contain ${sponsor.extraClass || ''}`}
                      />
                    </div>
                  </dt>
                  <dd className="mt-1 text-base leading-7">
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Visit the {sponsor.name} website
                    </a>
                    {sponsor.description && <p>{sponsor.description}</p>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      {/* Silver Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-slate-500">SILVER</span> sponsors
            </h2>
            <div className="col-span-2">
              <dl className="grid items-end grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 place-items-start">
                {silverSponsors.map((sponsor) => (
                  <div key={sponsor.name}>
                    <dt className="text-base font-semibold leading-7 text-black">
                      <div className="flex items-center h-24">
                        <img
                          src={sponsor.imagePath}
                          alt={sponsor.name}
                          className="max-h-14 img-fill-contain"
                        />
                      </div>
                    </dt>
                    <dd className="mt-1 text-base leading-7">
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:underline"
                      >
                        Visit the {sponsor.name} website
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Bronze Sponsor Section - had to manually set up */}
      <section>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-amber-800">BRONZE</span> sponsors
            </h2>
            <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2 place-items-start">
              {bronzeSponsors.map((sponsor) => (
                <div key={sponsor.name}>
                  <dt className="text-base font-semibold leading-7 text-black">
                    <div className="flex items-center h-20">
                      <img
                        src={sponsor.imagePath}
                        alt={sponsor.name}
                        className="max-h-20 img-fill-contain"
                      />
                    </div>
                  </dt>
                  <dd className="mt-4 text-base leading-7">
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline"
                    >
                      Visit the {sponsor.name} website
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
