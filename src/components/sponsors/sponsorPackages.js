import React from 'react';
import SponsorRegisterButtonSilver from '@/components/buttons/sponsor-register-button-silver';
import SponsorRegisterButtonDoubleSilver from '@/components/buttons/sponsor-register-button-double-silver';
import SponsorRegisterButtonGold from '@/components/buttons/sponsor-register-button-gold';
import SponsorRegisterButtonDoubleGold from '@/components/buttons/sponsor-register-button-double-gold';
import SponsorRegisterButtonPlatinum from '@/components/buttons/sponsor-register-button-platinum';
import SponsorRegisterButtonDoublePlatinum from '@/components/buttons/sponsor-register-button-double-platinum';
import SponsorRegisterButtonInfoZone from '@/components/buttons/sponsor-register-button-infozone';
import SponsorRegisterButtonDoubleInfoZone from '@/components/buttons/sponsor-register-button-double-infozone';

export default function SponsorPackages() {
  return (
    <div className="pb-24 bg-white sm:pt-12">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <section className="mb-24">
          <p className="text-base leading-7">
            <strong>Sponsor Attendee Registration:</strong> When you sign up for sponsorship,
            the person completing the registration will automatically be registered as an
            attendee. Depending on your chosen sponsorship level, you will be able to register
            additional Sponsor Attendees. If you know who these attendees are, please enter
            their information now. If not, you can contact{' '}
            <a
              href="mailto:erica@wheel-rail-seminars.com"
              className="underline hover:text-blue-600"
            >
              erica@wheel-rail-seminars.com
            </a>{' '}
            to have us add them later.
          </p>
        </section>

        {/* Heavy Haul Bronze Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-amber-800 sm:text-3xl">
                Heavy Haul
                <br />
                Bronze Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$1,000.00</p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  Acknowledgement on select printed Heavy Haul Seminar and Principles Course
                  materials
                </li>
                <li>
                  Logo placement on the Heavy Haul and Principles Course website with link to
                  your website
                </li>
              </ul>
              <div className="mt-4">
                Contact{' '}
                <a
                  href="mailto:erica@wheel-rail-seminars.com"
                  className="underline hover:text-blue-600"
                >
                  erica@wheel-rail-seminars.com
                </a>{' '}
                to purchase.
              </div>
            </div>
          </div>
        </section>

        {/* * Double Bronze Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-amber-800 sm:text-3xl">
                Double
                <br />
                Bronze Sponsorship *
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$1,800.00</p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  Includes Bronze level Sponsorship for both conferences (Heavy Haul &amp; Rail
                  Transit)
                </li>
              </ul>
              <div className="mt-4">
                Contact{' '}
                <a
                  href="mailto:erica@wheel-rail-seminars.com"
                  className="underline hover:text-blue-600"
                >
                  erica@wheel-rail-seminars.com
                </a>{' '}
                to purchase.
              </div>
            </div>
          </div>
        </section>

        {/* Heavy Haul Silver Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-slate-500 sm:text-3xl">
                Heavy Haul
                <br />
                Silver Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$3,400.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes all Bronze Level Benefits PLUS:</p>
              <ul className="ml-6 list-disc">
                <li>
                  One (1) Complimentary registration for the WRI 2025 Heavy Haul Seminar,
                  Principles Course and related social events
                </li>
                <li>6’ Display table in ExpoZone/Refreshment Area</li>
                <li>On-screen logo presence in General Session Room</li>
                <li>
                  Recognition on sponsor signage in Heavy Haul &amp; Principles registration
                  area
                </li>
                <li>Dedicated Sponsor web page with company logo and links to your site</li>
                <li>Social media recognition</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonSilver />
              </div>
            </div>
          </div>
        </section>

        {/* * Double Silver Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-slate-500 sm:text-3xl">
                Double
                <br />
                Silver Sponsorship *
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$6,500.00</p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  Includes Silver Level Sponsorship for both conferences (Rail Transit &amp; Heavy
                  Haul)
                </li>
                <li>
                  One year Sponsorship with Interface Journal including prominent spot with your
                  logo and hot link to your website
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonDoubleSilver />
              </div>
            </div>
          </div>
        </section>

        {/* Heavy Haul Gold Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-yellow-600 sm:text-3xl">
                Heavy Haul
                <br />
                Gold Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$4,000.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes all Silver Level Benefits PLUS:</p>
              <ul className="ml-6 list-disc">
                <li>
                  One (1) additional complimentary registration for a total of two (2)
                  complimentary registrations to the Heavy Haul, Principles Course and related
                  social events
                </li>
                <li>6’ Display Table in the Heavy Haul Welcome Reception</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonGold />
              </div>
            </div>
          </div>
        </section>

        {/* * Double Gold Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-yellow-600 sm:text-3xl">
                Double
                <br />
                Gold Sponsorship *
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$7,600.00</p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  Includes Gold Level Sponsorship for both conferences (Rail Transit &amp; Heavy
                  Haul)
                </li>
                <li>
                  One year Sponsorship with Interface Journal including prominent spot with your
                  logo and hot link to your website
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonDoubleGold />
              </div>
            </div>
          </div>
        </section>

        {/* Heavy Haul Platinum Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-wri-blue sm:text-3xl">
                Heavy Haul
                <br />
                Platinum Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$5,500.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes all Gold Level Benefits PLUS:</p>
              <ul className="ml-6 list-disc">
                <li>
                  One (1) additional complimentary registration for a total of three (3)
                  complimentary registrations
                </li>
                <li>
                  “Sponsor Bio Page” with company info, logos and links to your site, plus special
                  recognition on site
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonPlatinum />
              </div>
            </div>
          </div>
        </section>

        {/* * Double Platinum Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-wri-blue sm:text-3xl">
                Double
                <br />
                Platinum Sponsorship *
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$10,250.00</p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  Includes Platinum Level Sponsorship for both conferences (Rail Transit &amp;
                  Heavy Haul)
                </li>
                <li>
                  One year Sponsorship with Interface Journal including prominent spot with your
                  logo and hot link to your website
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonDoublePlatinum />
              </div>
            </div>
          </div>
        </section>

        {/* InfoZone Partner */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-green-700 sm:text-3xl">
                InfoZone
                <br />
                Partner
              </h3>
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
                The goal is to promote a better understanding of the dynamic interaction between
                vehicles and track. This innovative concept has consistently received great
                reviews from participants and InfoZone Partners alike.
              </p>
              <ul className="mt-3 ml-6 list-disc">
                <li>High-quality technical presentations</li>
                <li>Small-group interactive learning</li>
                <li>Focus on wheel/rail interaction</li>
                <li>Valuable insights for your product or service</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonInfoZone />
              </div>
            </div>
          </div>
        </section>

        {/* * Double InfoZone Partner */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-green-700 sm:text-3xl">
                Double
                <br />
                InfoZone Partner *
              </h3>
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
                <SponsorRegisterButtonDoubleInfoZone />
              </div>
            </div>
          </div>
        </section>

        {/* Star Note at the Bottom */}
        <p className="mt-4 text-2xl leading-7">
          *All “Double” Sponsorship levels will give your organization the same level sponsorship
          at the Rail Transit Conference in Seattle, WA on August 26-28, 2025
        </p>
      </div>
    </div>
  );
}