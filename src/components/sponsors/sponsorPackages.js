import React from 'react';
import SponsorRegisterButton from '@/components/buttons/sponsor-register-button';

export default function SponsorPackages() {
  return (
    <div className="pt-12 pb-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h1 className="mb-12 text-4xl font-bold tracking-tight text-center text-black sm:text-5xl">
          WRI 2025 Sponsorship Packages
        </h1>

        {/* Platinum */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-zinc-500 sm:text-3xl">
                Heavy Haul Platinum<br />
                Sponsorship
              </h2>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$5,500.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes all Gold Level Benefits PLUS:</p>
              <ul className="ml-6 list-disc">
                <li>
                  Three (3) total complimentary registrations for the WRI 2025 Heavy Haul
                  Seminar, Principles Course and related social events
                </li>
                <li>
                  Dedicated Sponsor web page with company logo, description, and links to your
                  site
                </li>
                <li>Individual social media recognition</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButton />
              </div>
            </div>
          </div>
        </section>

        {/* Double Platinum */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-zinc-500 sm:text-3xl">
                Double
                <br />
                Platinum Sponsor
              </h2>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$10,250.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes all Double Gold Level Benefits PLUS:</p>
              <ul className="ml-6 list-disc">
                <li>
                  Three (3) total complimentary registrations for BOTH WRI 2025 events
                  including the WRI 2025 Heavy Haul Conference in Kansas City and WRI 2025 Rail
                  Transit Conference in Seattle
                </li>
                <li>
                  The Double Silver sponsorship encompasses the entirety of each conference
                  including the Heavy Haul and Rail Transit Seminars and each corresponding
                  Principles Course and related social events
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButton />
              </div>
            </div>
          </div>
        </section>

        {/* Gold */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-yellow-600 sm:text-3xl">
                Heavy Haul Gold<br />
                Sponsorship
              </h2>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$4,000.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes all Silver Level Benefits PLUS:</p>
              <ul className="ml-6 list-disc">
                <li>
                  Two (2) total complimentary registrations for the WRI 2025 Heavy Haul
                  Seminar, Principles Course and related social events
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButton />
              </div>
            </div>
          </div>
        </section>

        {/* Double Gold */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-yellow-600 sm:text-3xl">
                Double
                <br />
                Gold Sponsorship
              </h2>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$7,600.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes all Double Silver Level Benefits PLUS:</p>
              <ul className="ml-6 list-disc">
                <li>
                  Two (2) total complimentary registrations for BOTH WRI 2025 events including
                  the WRI 2025 Heavy Haul Conference in Kansas City and WRI 2025 Rail Transit
                  Conference in Seattle
                </li>
                <li>
                  The Double Silver sponsorship encompasses the entirety of each conference
                  including the Heavy Haul and Rail Transit Seminars and each corresponding
                  Principles Course and related social events
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButton />
              </div>
            </div>
          </div>
        </section>

        {/* Silver */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-slate-500 sm:text-3xl">
                Heavy Haul Silver<br />
                Sponsorship
              </h2>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$3,400.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes:</p>
              <ul className="ml-6 list-disc">
                <li>
                  One (1) Complimentary registration for the WRI 2025 Heavy Haul Seminar,
                  Principles Course and related social events
                </li>
                <li>
                  Acknowledgment on select printed Heavy Haul Seminar and Principles Course
                  materials
                </li>
                <li>
                  Logo placement on the Heavy Haul Seminar and Principles Course website with
                  link to your website
                </li>
                <li>6’ Display table in ExpoZone/Refreshment Area</li>
                <li>On-screen logo presence in General Session Room</li>
                <li>
                  Recognition on sponsor signage in Heavy Haul &amp; Principles registration
                  area
                </li>
                <li>
                  Dedicated Sponsor web page with company logo and links to your site
                </li>
                <li>Social media recognition</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButton />
              </div>
            </div>
          </div>
        </section>

        {/* Double Silver */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-slate-500 sm:text-3xl">
                Double
                <br />
                Silver Sponsorship
              </h2>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$6,500.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes:</p>
              <ul className="ml-6 list-disc">
                <li>
                  One (1) Complimentary registration for BOTH WRI 2025 events including the WRI
                  2025 Heavy Haul Conference in Kansas City and WRI 2025 Rail Transit Conference
                  in Seattle
                </li>
                <li>
                  Acknowledgment on select printed Heavy Haul Seminar, Rail Transit Seminar and
                  Principles Course materials
                </li>
                <li>
                  Logo placement on the Heavy Haul Seminar, Rail Transit Seminar, and Principles
                  Course website with link to your website
                </li>
                <li>6’ Display table in ExpoZone/Refreshment Area</li>
                <li>On-screen logo presence in General Session Room</li>
                <li>
                  Recognition on sponsor signage in Heavy Haul, Rail Transit &amp; Principles
                  registration area
                </li>
                <li>
                  Dedicated Sponsor web page with company logo and links to your site
                </li>
                <li>Social media recognition</li>
                <li>
                  One Year Sponsorship with Interface Journal Including prominent spot with your
                  logo and hot link to your website
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButton />
              </div>
            </div>
          </div>
        </section>

        {/* Bronze */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-amber-800 sm:text-3xl">
                Heavy Haul Bronze<br />
                Sponsorship
              </h2>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$2,500.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes:</p>
              <ul className="ml-6 list-disc">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
              </ul>
              <div className="mt-4">
                Contact{' '}
                <a href="mailto:erica@wheel-rail-seminars.com">
                    erica@wheel-rail-seminars.com
                </a>{' '}
                to purchase.
                </div>
            </div>
            </div>
          </div>
        </section>

        {/* Double Bronze */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-amber-800 sm:text-3xl">
                Double
                <br />
                Bronze Sponsorship
              </h2>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$4,000.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes all Double Bronze Level Benefits PLUS:</p>
              <ul className="ml-6 list-disc">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur.
                </li>
              </ul>
              <div className="mt-4">
                Contact{' '}
                <a href="mailto:erica@wheel-rail-seminars.com">
                    erica@wheel-rail-seminars.com
                </a>{' '}
                to purchase.
                </div>
            </div>
          </div>
        </section>

        {/* InfoZone */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-green-700 sm:text-3xl">
                InfoZone<br />
                Partner
              </h2>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$7,000.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1">
                The InfoZone is an interactive learning environment that is designed to augment
                the information presented at the annual WRI Conference. Our InfoZone partners
                offer high-quality technical information on aspects of wheel/rail interaction
                that they know best, providing small groups of approximately 30-40 delegates
                insight into the product or service that is the specialty of the presenting
                company.
              </p>
              <p>
                The goal is to promote a better understanding of the dynamic interaction
                between vehicles and track. This innovative concept has consistently received
                great reviews from participants and InfoZone Partners alike.
              </p>
              <ul className="mt-3 ml-6 list-disc">
                <li>High-quality technical presentations</li>
                <li>Small-group interactive learning</li>
                <li>Focus on wheel/rail interaction</li>
                <li>Valuable insights for your product or service</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButton />
              </div>
            </div>
          </div>
        </section>

        {/* Double InfoZone */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-green-700 sm:text-3xl">
                Double
                <br />
                InfoZone Partner
              </h2>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$13,000.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1">
                For the first time, in 2025 we are offering InfoZone sponsorships for both the
                WRI 2025 Heavy Haul Conference AND WRI 2025 Rail Transit. The “Double InfoZone
                Sponsorship” provides exposure at both WRI 2025 events this year for one low
                price!
              </p>
              <p>
                Our InfoZone partners offer high-quality technical information on the aspects
                of wheel/rail interaction that they know best. These sessions, which are built
                into the Heavy Haul &amp; Rail Transit Seminar program, are designed to provide
                small groups of approximately 30-40 delegates insight into the product or
                service that is the specialty of the presenting company.
              </p>
              <ul className="mt-3 ml-6 list-disc">
                <li>Showcase your expertise at two WRI 2025 events</li>
                <li>Engage with both Heavy Haul and Rail Transit audiences</li>
                <li>Elevate brand recognition with a single sponsorship</li>
                <li>Proven track record of participant satisfaction</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButton />
              </div>
            </div>
          </div>
        </section>

        {/* Sponsor Attendee Registration */}
        <section>
          <p className="text-base leading-7">
            <strong>Sponsor Attendee Registration:</strong> When you register for sponsorship,
            the person completing the registration will automatically be registered as an
            attendee. Depending on your chosen sponsorship level, you will be able to register
            additional Sponsor Attendees. If you know who these attendees are, please enter
            their information now. If not, you can return to this page later to add them.
          </p>
        </section>
      </div>
    </div>
  );
}