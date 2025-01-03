import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Banner25HH from '@/components/banner/wri25HH-no-button';
import Navigation from '@/components/navigation';
import IconLinks from '@/components/icons';
import SponsorCta from '@/components/sponsors/sponsor-cta';
import SponsorsPackages from '@/components/sponsors/sponsorPackages';

const sponsorPackages = () => {
  return (
    <main className="bg-white">
      <Head>
        <title>WRI 2025 || Sponsor Packages</title>
      </Head>
      <Navigation />
      <Banner25HH />
      <div className="seminar-about-text" id="sponsor">
        <div className="px-12 mx-auto">
          <h2 className="text-6xl font-normal leading-normal text-center pt-11">
            Consider becoming a <b>WRI 2025</b> Sponsor
          </h2>
        </div>
      </div>
      <SponsorsPackages />
    </main>
  );
};

export default sponsorPackages;
