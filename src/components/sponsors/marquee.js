import Image from 'next/image';
import Link from 'next/link';

const LogoRow = () => {
  return (
    <div className="flex space-x-16 overflow-hidden">
      <div className="flex space-x-16 animate-loop-scroll">
        <Image
          src="/NuRail_Presenting_Sponsor_2025.png"
          alt="Presenting Sponsor NuRail"
          className="w-auto h-12 max-w-none"
          loading="lazy"
          width={200}
          height={50}
        />
        <Image
          src="/RTS_Presenting_Sponsor_2025.png"
          alt="Presenting Sponsor RTS"
          className="w-auto h-12 max-w-none"
          loading="lazy"
          width={200}
          height={50}
        />
        <Image
          src="/platinum-plasser-american.svg"
          alt="Platinum Sponsor Plasser American"
          className="w-auto h-12 max-w-none"
          loading="lazy"
          width={353}
          height={50}
        />
        <Image
          src="/platinum-loram.png"
          alt="Platinum Sponsor Loram"
          className="w-auto h-12 max-w-none"
          loading="lazy"
          width={279}
          height={50}
        />
        <Image
          src="/gold-holland.png"
          alt="Gold Sponsor Holland"
          className="w-auto h-[75px] max-w-none -mt-2"
          loading="lazy"
          width={206}
          height={75}
        />
        <Image
          src="/gold-gateway-rail-services.png"
          alt="Gold Sponsor Gateway Rail Services"
          className="w-auto h-[80px] max-h-[80px] max-w-none -mt-1"
          loading="lazy"
          width={200}
          height={80}
        />
        <Image
          src="/silver-wabtec.png"
          alt="Gold Sponsor Wabtec"
          className="w-auto h-[65px] max-w-none -mt-1"
          loading="lazy"
          width={157}
          height={65}
        />
        <Image
          src="/platinum-ensco-nospace.jpg"
          alt="Gold Sponsor ENSCO"
          className="w-auto h-[58px] max-w-none -mt-1"
          loading="lazy"
          width={140}
          height={58}
        />
        <Image
          src="/gold-amstead-rail.png"
          alt="Gold Sponsor Amsted Rail"
          className="w-auto h-12 max-w-none"
          loading="lazy"
          width={190}
          height={50}
        />
        <Image
          src="/getzner-logo.png"
          alt="Silver Sponsor Getzner"
          className="w-auto h-12 max-w-none"
          loading="lazy"
          width={160}
          height={50}
        />
        <Image
          src="/bronze-steel-dynamics.png"
          alt="Bronze Sponsor Steel Dynamics, Inc. (SDI)"
          className="w-auto h-12 max-w-none"
          loading="lazy"
          width={247}
          height={50}
        />
        <Image
          src="/bronze-lbfoster.png"
          alt="Bronze Sponsor LB Foster"
          className="w-auto h-12 max-w-none"
          loading="lazy"
          width={240}
          height={50}
        />
        <Image
          src="/bronze-fuchs.png"
          alt="Bronze Sponsor Fuchs"
          className="w-auto h-[85px] max-h-[85px] max-w-none"
          loading="lazy"
          width={122}
          height={85}
        />
        <Image
          src="/bosspac-logo.svg"
          alt="InfoZone Sponsor BosPac"
          className="w-auto h-[45px] max-w-none mt-1"
          loading="lazy"
          width={150}
          height={45}
        />
        <Image
          src="/silver-linsinger.png"
          alt="InfoZone Sponsor Linsinger"
          className="w-auto h-[65px] max-h-[65px] max-w-none mt-1"
          loading="lazy"
          width={130}
          height={65}
        />
        <Link href="https://www.hbkworld.com/en/solutions/industries/automotive-ground-transportation/rail" target="_blank">
          <Image
            src="/marquee-hbk.png"
            alt="Gold Sponsor HBK"
            className="w-auto h-[65px] max-h-[65px] max-w-none"
            loading="lazy"
            width={200}
            height={65}
          />
        </Link>
        <Link href="https://www.gmt-gmbh.com/en" target="_blank">
          <Image
            src="/new-gmt-international.png"
            alt="Silver Sponsor GMT"
            className="w-auto h-[50px] max-h-[50px] max-w-none"
            loading="lazy"
            width={180}
            height={50}
          />
        </Link>
        <Link href="https://www.konux.com/" target="_blank">
          <Image
            src="/marquee-konux.png"
            alt="Sponsor Konux"
            className="w-auto h-[60px] max-h-[60px] max-w-none"
            loading="lazy"
            width={240}
            height={60}
          />
        </Link>
      </div>
    </div>
  );
};

export default LogoRow;
