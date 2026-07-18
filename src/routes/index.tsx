import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import rappellerImg from "@/assets/rappeller.png";
import logoColor from "@/assets/finding-trails-logo-color.png";
import logoWhite from "@/assets/finding-trails-logo-white.png";
import Navbar from "@/components/ui/navbar";

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBze-7Tr2uc9qmjGiM566O5QDBEsdFrEHE_2VIeG17nrlx2BTtYFjlJIAEIR4Tg8Jh7JJ6uPtc1W8HChFomE9qw9hFVtPMVjmBcMMCmwto5hLbsNsdpHZwFG4CWNV4q_z1g4j418KyklaCtZ4Gx_20mZ14mI-htlj5Ja22GF6uskk6izVTVNOSskWua2Tv_b1w78vOnhoe1LNrWsdTEw1C-uNGNjbXpKekupV-DBLVqXV5HPk4dtYiaodqWvrhXTo7-ZMOlJnfE8aA";
const SAHYADRI =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDLDZDzGGyD-x-WlcNhKLJDIGnfM0LhjGYFQfkGb76pju01miymOROP8PwUT-CzqfsZINqfVQK9EHmNGspAIFm3zIExt-JPkWIr0SngaltoHZ_5Qfkk5DgArdW2MerY2cQDARsB5AsX3368vDQRpthJhAn-GIUlrpEr6fei1ScaU78VdWXS7SYMC4EGCUgfwxxNs2AjtCy6c0ArCs2r2k4txX2BlicUJYRvB22Jt2L0wKb7eKL4fi6KJyddS4k6e_OpiJIdjZBblok";
const HIMALAYAS =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAf_1-KQKHEqVHUieapiY2nS1pdddDqZew-QehGFNA5V4PyA2mlRi1CXkxEFnneJg8vZjGhsAa2jS5Gn4qMfHUGszmvWXIv1FwuDm9UQvZNiBfUNONng7zLy_eJygiWRX6Zw0MWon1XwHG2BPqnCfRlaSX_LnbeOgGhQklAuFBTAAp6W9RK5S866hw5I1yLqa7jEnRVqqHZqiyI2W1ojK1IW_FB2HtiykWgH4mmZOm2KdGJGqyuDw2r-wxrl2FXdlh12YhkzJPE8f4";
const GROUP =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAJt9sRYeUPCOEOQvBI-bOJC30rO7IdVfBE_2DkHYSEqM-TcZmtej6GGQQLXbiGXC4lsB-PhkdjVxPkKxZYmMb95G_R-aEvcIwzU-5-vrNcvejpZFKFuvlLhG1QtiCZlny8EM4IEhNOFtGGdRH_1SHMGAN65Cg17bQfx6yA85TZfTxSo51BtydtN9VdmFMs2rNjE0TgiblKuJkr7lMNpN5cTcEkdqJts1uIkod7Hyq3SchiX-O-y1IwmbQnhSfUbzOB7zfFzUwqbLE";
const G1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAvOkYwZ-bTrf6grFNdGSEqUgRrOXH5PpKE_HZ2ynxUy1YMXckqRqHIj5JJWw1g71SVW4NcVW3qzkxb8HJTA3FgTmWSThN2hmr3bVmE9YdCCow8hZGnhQejT86hAnD_yKdppI-ftH6WbFzIjcqRLPulkhsp5WbsRhRgCwxhkzbEzIBDR6mbvhtVviHdAMEBcDfX6qV6yrODFYN7SQYg73ta1TvjR8hEToDN-W0sKzjpNWIT_kj7UWxPttFsq8uy-gkjX8qPf1vI2iQ";
const G2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAzm6Z0M5WkL1llxt99rJPRtW-plLFkYJoYlAF1_zFUebbklgKvZnw1fwBMttSMSlBuOvDkTsRK-_woHn-_mE4zTFkbHsFzYjrStIKY26o36VZTotuz0HnGJU8JOGWGOU2Rce2IoYHbALnHfM5LfUxkh3FK6EkKU3TLAprk-bNCU-JooEdiG1WrP_1AWfUeuXj5LPy1kpH6O-ByuVOT7VWW4nh5hLo_wt_6GIfdOcg0Gm1eoklBv_wtC39qjPPdYr7L8KNjJH7X_xM";
const G3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuABMsP52ek_YAfG9ACT21ySfaXPdVjpiTlHDtglVukxaN_IFMgGmFU5Spd7-UxilBFKYIQFfXUKbZ71yRLTEdRKX73DtBWkhX6Z9mVZRA0VOX_I4IpvHr1TKfBVEtyvf4DJ39MpJYDh8hAs--RFTq1r45dHwOVvJZMYxpUPu7obwnl8cE8EZ2MrRaFohcwSMDTEUqTcbMsASkebMfpLnB-_R1G97t_B7QYc-zeTIQVis9GlWErdl9lG6ZJ_p82DAGQonM6E2gNST78";
const FOUNDER =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBEXZltuKrMwdBKLTCXmMcoEZl75cGhq8K8taBX_HRW31MMlFFLFemUMKT2h-Ne1nWUFTqfYUdweIKSRJLUyVII4DMp6dhkG9VDhI4SZzpAKjWqEk1hr9QvpcCNbQPF9tzKAH2gTI-QQ1wR5IT9llpB8sK2NQ8bM0a_dHS33azXG13qhnrpOdMSTif46JJZX7yoEyTd2m37SyUyf54xLISVkn_H5DSDX1CM8aAtUG4XO8iNgAYmvhe5jnyIkLbZ42iSFYQN5UpX_5w";
const RAPPELLER = rappellerImg;

const GALLERY_TREK_1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC3_L1-7aKdpUe_wPbCyY641s22xQ40rmLuvuSRVry1cbdDxsaXe1rjkLy5QhfbFg35hsvDRjzmUmqMg7BS39zN6oiePNST67C6UGgCtzl5fkIxwy8NaKBMv9u_6A1bKa2qF0mBOSQwioaaZgGDSUH9eDpfzNoPJCcm9A3Hl6YkHE15KI6EJca0Y6pLMYTefBbK4iRMKKuwiIk3yJhLjLW6hfoYzd7bdoNwN1NjnL-Sdlk70OS4Nn0wzKExtpj64t6E7nbp2VTRcig";
const GALLERY_TREK_2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuACS5LY3CD8mzUra-ly3Ebk1kO9eHya-rnxNvJ7onQPgCgu8wNwLnfRGuxWOA6cyhtXppn6r_yjB_wKLsafh--J4AZD_5crNAUUDniDuFXF0vbBUo6Jw7KyN2XWz86BM2uyQ_aENg2yOEBnYGaIOugGDB1VyunFGsmzRQzU2de8Nobygj7LDftS8vhV6XBPsKMwulMIanhV9_f_I6tUynbcyhGxEQftWqHWSqZxCsPxmqYHJgzxCnnT75MhqZyhB8p0V6AmjYGesT8";
const GALLERY_TREK_3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtCOcLG-jaCDYLnu9VBPaJkGOGVmL9a8xU3xKggQm4spd3tdAoeF5Sq84zCXBheQ2zEQPcSklAV3fn7K4oxMGzJju3dtYDMhefZR8aDj89YBpr93QYIcbJIV0tAvelEpqQUTOAGtWuDGM0c6iJ-qGkABCjBr8DqAX_9ToSnM0NiOWBjK9Nae2PyZPq7DcvWYocAtJvo2tf7PoT-Ry9Hc06YwnjnJzbCSixArpX8ZDaNZUjKH0oyDFCJZh6OmMGK-sBzJy89JPa5t0";
const GALLERY_TREK_4 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNV6AxqQ8IociwMZ8-S6HgZYoRAtmZH_0x9uyPWUJrXd5VwNK8zEqgfZmYiK8tmjQisCGZRbNx8Zi3-tQApitBpFpOuLtcNKy9gW7krbnEUsbwhdo9vQMaLIJ1f9LLaXsDWyOpQOQpbbSQ3v134Okc-cQeoWei9M3B3KeqVye2kzXTTjwIfW2CmqjeC8RMr9o9Gm1fEE24KYqAXcA0GP-BItQapDTcwmmid9sl07KkPFNmK9tCAtCgfp6AwOjQZEktVqodb0imBM";
const GALLERY_TREK_5 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDS36sxj1t9SoeduBnSOGeEZeO4Orw6pd15sn6I-0dnoQGNzGoZzG7KPJWR_oeQAcQ_fPjtgVAx7nt43nr9Jgjmasc6lM-iEkcZkzAd-8v6uATM5MlE2JXhj-Z9F--OGXoFLSGNBWM1iB7MdLNY1ONxWAJJiHrR2fr0RqZKRfP8f3Ox_4h6WTBkSkosgPAXH0Bm9cEO2j9iT7C1pMBQcc11PjPLJRoGtxMl8ZEmdt80J0PDStXBYHRoWwUYM5EmgMc2prQuTN9ghLk";

const STARGAZING =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOB6VQkF9llw18llr51Ie-q4HoLYlxvYLutnWJAdtNv3HFolQjPRulThfGaZF7AXfs1kJiCzNTagOcSu_tyNV4Pif68LMwDAGup3o9D-2CDNc1p3QxrUEM9RKM1r25aPSFEwkvgei0mLvZC-CPPgp6avgpHSwnOI_kXN0cEffSmpFm53kzJt2LD7FW48lSumo7M0NiW6lbOEv1AYUclO06oKGux0zDq4i4_YSmM2ktn03pQjWwGg6zThSbgVPCCBy-ccBHyGrczNU";
const HARISH =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBCPuQtZt4txs6KgGydQpu60V60VHakZIHMHsRmwsRhmaEcYMzysA3Xo12ylJF05K_3jaGeMTraMx-WvlXgtGyKB_lzMaKKqH9is4_mMryjdhGO7SKwTqT79fZbbo_G1tbNTCmJFc2M01-vQhRtgMBxSU4H8oZaszqMbUQPpinyxqMG_cB6OxhVMM76ufoFwcMg8TivHxL30xxL6y-BQ7MEFgAq1siOxZF_-e7WLblbJq0h5k3FC01MJ7CmjlYW1i3K0wxMeDceSGw";

/** Rope + rappelling climber near the right scrollbar. */
function Rappeller() {
  const [pct, setPct] = useState(0);
  const raf = useRef<number | null>(null);
  const target = useRef(0);
  const current = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      target.current = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
    };
    const tick = () => {
      // Smooth, slow easing toward the scroll target
      current.current += (target.current - current.current) * 0.06;
      setPct(current.current);
      raf.current = requestAnimationFrame(tick);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  // Rope length spans from top of viewport down to the climber.
  // Climber travels from 6vh to 82vh across the whole page scroll.
  const startVh = 6;
  const endVh = 82;
  const climberTop = `calc(${startVh}vh + ${(endVh - startVh) * pct}vh)`;
  const ropeHeight = `calc(${startVh}vh + ${(endVh - startVh) * pct}vh)`;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 right-2 md:right-4 z-40 h-screen w-14 md:w-16"
    >
      {/* Rope */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] rounded-full"
        style={{
          height: ropeHeight,
          background: "linear-gradient(to bottom, rgba(75,81,84,0.15), rgba(75,81,84,0.75))",
        }}
      />
      {/* Anchor point at the very top */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[color:var(--color-forest-deep)] shadow" />
      {/* Climber */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: climberTop,
          width: "64px",
          height: "64px",

          transform: "translate(-50%, -6px)",
          transition: "transform 120ms linear",
          animation: "ft-sway 4.5s ease-in-out infinite",
          transformOrigin: "top center",
        }}
      >
        <img
          src={RAPPELLER}
          alt=""
          className="w-full h-full object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]"
        />
      </div>
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".ft-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: "'FILL' 0" }}
    >
      {name}
    </span>
  );
}

function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setOffset(window.scrollY);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative h-[92vh] w-full pt-24 flex items-end pb-16 px-4 md:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-forest-deep)]/85 via-[color:var(--color-forest-deep)]/25 to-transparent z-10" />
        <div
          className="absolute inset-0 -top-24 -bottom-24 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('${HERO_IMG}')`,
            transform: `translate3d(0, ${offset * 0.4}px, 0) scale(1.1)`,
          }}
        />
      </div>
      <div
        className="relative z-10 text-white w-full max-w-[1280px] mx-auto"
        style={{ transform: `translate3d(0, ${offset * -0.15}px, 0)` }}
      >
        <span className="inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-sunset-vivid)] mb-4 border border-white/20 bg-white/10 backdrop-blur px-3 py-1 rounded-full">
          Est. Sahyadri · Himalayas
        </span>
        <h1 className="font-display font-extrabold text-[40px] leading-[1.05] md:text-[64px] md:leading-[1.02] tracking-tight max-w-3xl drop-shadow-lg">
          Find Your Trail,
          <br />
          <span className="text-[color:var(--color-sunset-vivid)]">Find Your Adventure</span>
        </h1>
        <p className="mt-5 text-white/90 text-lg max-w-xl">
          Discover curated trekking expeditions and cultural experiences across the wildest
          ridgelines in India.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#upcoming"
            className="inline-flex items-center gap-2 bg-[color:var(--color-forest-deep)] text-white px-6 py-4 rounded font-mono text-[11px] uppercase tracking-widest border border-[color:var(--color-forest-deep)] hover:bg-[color:var(--color-sunset-vivid)] hover:border-[color:var(--color-sunset-vivid)] transition shadow-lg"
          >
            Upcoming Treks <Icon name="arrow_forward" className="text-[16px]" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-6 py-4 rounded font-mono text-[11px] uppercase tracking-widest hover:bg-white/20 transition"
          >
            Expedition Gallery
          </a>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white border-b border-[color:var(--color-outline-variant)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, #4B5154 1px, transparent 1px), linear-gradient(to bottom, #4B5154 1px, transparent 1px)",
        }}
      />
      <div className="max-w-[1280px] mx-auto relative z-10 text-center ft-reveal">
        <span className="font-mono text-[11px] text-[color:var(--color-granite-gray)] uppercase tracking-[0.3em]">
          The Mission
        </span>
        <h2 className="mt-3 font-display font-bold text-[color:var(--color-forest-deep)] text-3xl md:text-4xl">
          Discover Your Next Adventure With Us
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[color:var(--color-on-surface-variant)] text-lg">
          Finding Trails curates trekking experiences across the Sahyadri and Himalayas, blending
          adventure with cultural exploration for unforgettable journeys.
        </p>
      </div>
    </section>
  );
}

type TrailCard = {
  tag: string;
  tagStyle: string;
  title: string;
  img: string;
  span?: string;
};
const TRAILS: TrailCard[] = [
  {
    tag: "Moderate",
    tagStyle:
      "bg-white border border-[color:var(--color-granite-gray)] text-[color:var(--color-forest-deep)]",
    title: "Sahyadri",
    img: SAHYADRI,
  },
  {
    tag: "Expert",
    tagStyle: "bg-[color:var(--color-sunset-vivid)] text-white",
    title: "Himalayas",
    img: HIMALAYAS,
  },
  {
    tag: "Custom",
    tagStyle:
      "bg-white border border-[color:var(--color-granite-gray)] text-[color:var(--color-forest-deep)]",
    title: "Group Activities",
    img: GROUP,
    span: "md:col-span-2 lg:col-span-1",
  },
];

function Trails() {
  return (
    <section id="trails" className="py-20 px-4 md:px-10 bg-[color:var(--color-earth-linen)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-10 text-center ft-reveal">
          <h2 className="font-display font-bold text-[color:var(--color-forest-deep)] text-3xl md:text-4xl">
            Explore Our Trails
          </h2>
          <p className="mt-2 text-[color:var(--color-granite-gray)]">
            Curated categories for every explorer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ft-reveal">
          {TRAILS.map((t) => (
            <a
              key={t.title}
              href="#upcoming"
              className={`group relative block aspect-[4/3] rounded-lg overflow-hidden border border-[color:var(--color-outline-variant)] shadow-sm hover:shadow-md transition-shadow ${t.span ?? ""}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${t.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-forest-deep)]/90 via-[color:var(--color-forest-deep)]/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 glass-panel border-t border-white/20">
                <div className="flex justify-between items-end">
                  <div>
                    <span
                      className={`inline-block px-2 py-1 rounded-sm font-mono text-[10px] uppercase tracking-widest mb-2 ${t.tagStyle}`}
                    >
                      {t.tag}
                    </span>
                    <h3 className="font-display font-semibold text-[color:var(--color-forest-deep)] text-2xl">
                      {t.title}
                    </h3>
                  </div>
                  <div className="bg-[color:var(--color-forest-deep)] rounded-full p-2 text-white group-hover:bg-[color:var(--color-sunset-vivid)] transition-colors group-hover:-translate-y-1 group-hover:translate-x-1 duration-300">
                    <Icon name="arrow_outward" className="text-[16px] block" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Upcoming() {
  return (
    <section id="upcoming" className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="ft-reveal">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-granite-gray)]">
            Schedule
          </span>
          <h2 className="mt-2 font-display font-extrabold text-[color:var(--color-forest-deep)] text-3xl md:text-5xl">
            Upcoming Treks
          </h2>
          <p className="mt-3 max-w-2xl text-[color:var(--color-granite-gray)] text-lg">
            From the rugged peaks of the Himalayas to the lush trails of the Sahyadris — your next
            adventure awaits.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ft-reveal">
          {/* Featured */}
          <article className="md:col-span-2 lg:col-span-2 group relative rounded-xl overflow-hidden border border-[color:var(--color-outline-variant)] min-h-[420px] flex flex-col">
            <img
              src={STARGAZING}
              alt="Sahyadri Stargazing Camp"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-forest-deep)]/90 via-[color:var(--color-forest-deep)]/40 to-transparent" />
            <div className="relative z-10 flex-grow flex flex-col justify-between p-6 text-white">
              <div className="flex justify-between items-start">
                <span className="bg-[color:var(--color-sunset-vivid)] text-white px-3 py-1 font-mono text-[11px] uppercase tracking-widest rounded-sm flex items-center gap-1">
                  <Icon name="warning" className="text-[14px]" /> Moderate
                </span>
                <div className="glass-overlay text-white px-3 py-1 rounded-sm font-mono text-[11px] uppercase tracking-widest flex items-center gap-2 border border-white/20">
                  <Icon name="calendar_month" className="text-[16px]" /> Oct 15 – 17, 2024
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl mb-2">Sahyadri Stargazing Camp</h3>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Icon name="location_on" className="text-[16px]" /> Rajmachi, Maharashtra
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="timer" className="text-[16px]" /> 2 Nights
                  </span>
                </div>
                <div className="flex justify-between items-end gap-4">
                  <p className="hidden md:block text-white/90 max-w-md">
                    A night trek followed by an expert-guided astronomy session away from city
                    lights.
                  </p>
                  <button className="bg-white text-[color:var(--color-forest-deep)] font-mono text-[11px] uppercase tracking-widest px-6 py-3 rounded hover:bg-[color:var(--color-sunset-vivid)] hover:text-white transition ml-auto shrink-0">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <TrekCard
            img={HARISH}
            tag="Hard"
            tagBg="bg-[color:var(--color-forest-deep)]"
            date="Nov 02, 2024"
            title="Harishchandragad via Nalichi Vaat"
            location="Sahyadris"
            icon="terrain"
          />

          {/* Card 3 (gradient placeholder) */}
          <article className="group rounded-xl overflow-hidden border border-[color:var(--color-outline-variant)] flex flex-col bg-white">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#003a54] to-[color:var(--color-forest-deep)]">
              <div className="absolute top-4 left-4">
                <span className="bg-[color:var(--color-sunset-vivid)] text-white px-3 py-1 font-mono text-[11px] uppercase tracking-widest rounded-sm flex items-center gap-1">
                  <Icon name="warning" className="text-[14px]" /> Expert
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <Icon name="landscape" className="text-white text-[120px]" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-[color:var(--color-granite-gray)] font-mono text-[11px] uppercase tracking-widest mb-2">
                <Icon name="calendar_month" className="text-[16px]" /> Dec 10 – 20, 2024
              </div>
              <h3 className="font-display font-semibold text-[color:var(--color-forest-deep)] text-xl mb-2">
                Everest Base Camp Winter Expedition
              </h3>
              <div className="flex items-center gap-4 text-[color:var(--color-granite-gray)] text-sm mb-6">
                <span className="flex items-center gap-1">
                  <Icon name="location_on" className="text-[16px]" /> Himalayas
                </span>
              </div>
              <button className="mt-auto w-full border border-[color:var(--color-granite-gray)] text-[color:var(--color-granite-gray)] font-mono text-[11px] uppercase tracking-widest px-6 py-3 rounded hover:bg-[color:var(--color-forest-deep)] hover:text-white hover:border-[color:var(--color-forest-deep)] transition">
                Book Now
              </button>
            </div>
          </article>

          {/* Card 4 wide */}
          <article className="md:col-span-2 group rounded-xl overflow-hidden border border-[color:var(--color-outline-variant)] flex flex-col md:flex-row bg-white">
            <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden bg-gradient-to-tr from-[#43655c] to-[#e0e3e4]">
              <div className="absolute top-4 left-4">
                <span className="bg-white border border-[color:var(--color-outline-variant)] text-[color:var(--color-granite-gray)] px-3 py-1 font-mono text-[11px] uppercase tracking-widest rounded-sm flex items-center gap-1">
                  <Icon name="hiking" className="text-[14px]" /> Easy
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <Icon name="forest" className="text-white text-[120px]" />
              </div>
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[color:var(--color-granite-gray)] font-mono text-[11px] uppercase tracking-widest mb-2">
                <Icon name="calendar_month" className="text-[16px]" /> Every Weekend
              </div>
              <h3 className="font-display font-semibold text-[color:var(--color-forest-deep)] text-xl mb-2">
                Andharban Forest Walk
              </h3>
              <p className="text-[color:var(--color-granite-gray)] mb-6">
                A beautiful descent through the dark, dense forests of the Sahyadris. Perfect for
                beginners and nature photographers.
              </p>
              <button className="w-max border border-[color:var(--color-granite-gray)] text-[color:var(--color-granite-gray)] font-mono text-[11px] uppercase tracking-widest px-8 py-3 rounded hover:bg-[color:var(--color-forest-deep)] hover:text-white hover:border-[color:var(--color-forest-deep)] transition">
                Book Now
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function TrekCard({
  img,
  tag,
  tagBg,
  date,
  title,
  location,
}: {
  img: string;
  tag: string;
  tagBg: string;
  date: string;
  title: string;
  location: string;
  icon: string;
}) {
  return (
    <article className="group rounded-xl overflow-hidden border border-[color:var(--color-outline-variant)] flex flex-col bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`${tagBg} text-white px-3 py-1 font-mono text-[11px] uppercase tracking-widest rounded-sm flex items-center gap-1`}
          >
            <Icon name="terrain" className="text-[14px]" /> {tag}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-[color:var(--color-granite-gray)] font-mono text-[11px] uppercase tracking-widest mb-2">
          <Icon name="calendar_month" className="text-[16px]" /> {date}
        </div>
        <h3 className="font-display font-semibold text-[color:var(--color-forest-deep)] text-xl mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-4 text-[color:var(--color-granite-gray)] text-sm mb-6">
          <span className="flex items-center gap-1">
            <Icon name="location_on" className="text-[16px]" /> {location}
          </span>
        </div>
        <button className="mt-auto w-full border border-[color:var(--color-granite-gray)] text-[color:var(--color-granite-gray)] font-mono text-[11px] uppercase tracking-widest px-6 py-3 rounded hover:bg-[color:var(--color-forest-deep)] hover:text-white hover:border-[color:var(--color-forest-deep)] transition">
          Book Now
        </button>
      </div>
    </article>
  );
}

function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-[color:var(--color-forest-deep)] text-[color:var(--color-earth-linen)] overflow-hidden"
    >
      <div className="px-4 md:px-10 max-w-[1280px] mx-auto mb-10 flex justify-between items-end ft-reveal">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-sunset-vivid)]">
            Basecamp Chronicles
          </span>
          <h2 className="mt-2 font-display font-bold text-3xl md:text-5xl text-white">
            Expedition Gallery
          </h2>
          <p className="text-white/70 mt-2">Moments captured in the wild.</p>
        </div>
      </div>

      {/* Bento grid */}
      <div className="px-4 md:px-10 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[280px] ft-reveal">
        <GalleryTile
          img={GALLERY_TREK_1}
          category="Himalayas"
          title="Summit Push"
          className="md:col-span-8 md:row-span-2"
        />
        <GalleryTile
          img={GALLERY_TREK_2}
          category="Sahyadri"
          title="Monsoon Ridges"
          className="md:col-span-4 md:row-span-1"
        />
        <GalleryTile
          img={GALLERY_TREK_3}
          category="Night Camp"
          title="Star Trails"
          className="md:col-span-4 md:row-span-2"
        />
        <GalleryTile
          img={GALLERY_TREK_4}
          category="Ridgeline"
          title="The Ridge"
          className="md:col-span-8 md:row-span-1"
        />
        <GalleryTile
          img={GALLERY_TREK_5}
          category="Featured Story"
          title="Basecamp Chronicles"
          className="md:col-span-12 md:row-span-2 mt-2 md:mt-4"
          wide
        />
      </div>

      {/* Horizontal scroller — glimpses */}
      <div className="mt-10 flex gap-6 overflow-x-auto px-4 md:px-10 pb-4 snap-x snap-mandatory hide-scrollbar">
        {[G1, G2, G3].map((src, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-72 md:w-96 rounded-lg overflow-hidden border border-white/15"
          >
            <img
              src={src}
              alt={`Glimpse ${i + 1}`}
              className="w-full h-[380px] object-cover grayscale-[15%] hover:grayscale-0 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function GalleryTile({
  img,
  category,
  title,
  className = "",
  wide = false,
}: {
  img: string;
  category: string;
  title: string;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`relative group overflow-hidden rounded-xl border border-white/10 shadow-lg ${className}`}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-forest-deep)]/85 via-[color:var(--color-forest-deep)]/10 to-transparent" />
      <div className={`absolute ${wide ? "bottom-8 left-8 right-8" : "bottom-4 left-4 right-4"}`}>
        <span className="font-mono text-[10px] text-[color:var(--color-sunset-vivid)] uppercase tracking-[0.25em] block mb-1">
          {category}
        </span>
        <h3
          className={`font-display font-bold text-white ${wide ? "text-3xl md:text-4xl" : "text-lg md:text-xl"}`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

function Founder() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-10 bg-white border-y border-[color:var(--color-outline-variant)]"
    >
      <div className="max-w-[1280px] mx-auto ft-reveal">
        <div className="text-center mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-granite-gray)]">
            Leadership
          </span>
          <h2 className="mt-2 font-display font-bold text-[color:var(--color-forest-deep)] text-3xl md:text-4xl">
            About Us
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 border border-[color:var(--color-granite-gray)]/20 rounded-xl z-0" />
            <div className="relative z-10 aspect-[4/3] rounded-lg overflow-hidden border border-[color:var(--color-outline-variant)] shadow-md">
              <img src={FOUNDER} alt="Yash Hange, Founder" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[color:var(--color-sunset-vivid)] text-white p-3 rounded-lg shadow-lg z-20 flex items-center gap-2 border border-white">
              <Icon name="verified" />
              <span className="font-mono text-[11px] uppercase tracking-widest">
                BMC · AMC · SNR
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-display font-bold text-[color:var(--color-forest-deep)] text-3xl md:text-4xl mb-2">
              Yash Hange
            </h2>
            <p className="font-mono text-[11px] tracking-widest uppercase text-[color:var(--color-sunset-vivid)] font-bold mb-6">
              Founder &amp; Lead Explorer
            </p>
            <p className="border-l-2 border-[color:var(--color-sunset-vivid)] pl-4 text-[color:var(--color-on-surface-variant)] text-lg mb-6">
              Certified mountaineer leading expeditions with safety and passion. Dedicated to
              uncovering the raw beauty of high-altitude trails while upholding professional
              expedition standards.
            </p>
            <a
              href="https://www.instagram.com/mountaineer_on_wheels/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[color:var(--color-granite-gray)] text-[color:var(--color-forest-deep)] px-4 py-2 rounded font-mono text-[11px] uppercase tracking-widest hover:bg-[color:var(--color-forest-deep)] hover:text-white transition"
            >
              Follow on Instagram <Icon name="open_in_new" className="text-[16px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityCTA() {
  return (
    <section className="py-16 px-4 md:px-10 bg-[color:var(--color-earth-linen)] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
        <Icon name="forum" className="text-[300px]" />
      </div>
      <div className="max-w-xl mx-auto text-center relative z-10 bg-white/60 backdrop-blur-sm p-8 rounded-xl border border-white/50 shadow-sm ft-reveal">
        <h3 className="font-display font-bold text-2xl text-[color:var(--color-forest-deep)] mb-2">
          Join Our Community
        </h3>
        <p className="text-[color:var(--color-granite-gray)] mb-6">
          Get instant updates on upcoming events via WhatsApp.
        </p>
        <a
          href="https://chat.whatsapp.com/L2dgtdNszy36miwe2Znriq"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-mono text-[11px] uppercase tracking-widest px-6 py-3 rounded-full hover:opacity-90 transition shadow-md"
        >
          <Icon name="chat" /> Join The Group
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--color-forest-deep)] text-[color:var(--color-earth-linen)] w-full py-16 border-t border-[color:var(--color-granite-gray)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-10 max-w-[1280px] mx-auto">
        <div className="md:col-span-2">
          <img src={logoWhite} alt="Finding Trails" className="h-16 w-auto object-contain mb-4" />
          <p className="max-w-sm text-white/70 mb-6">
            Built for the wild. Curating premium expedition experiences in the Sahyadri and
            Himalayas.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61569425964501"
              aria-label="Facebook"
              className="text-white/70 hover:text-[color:var(--color-sunset-vivid)] transition"
            >
              <Icon name="public" />
            </a>
            <a
              href="https://www.instagram.com/finding.trails_/"
              aria-label="Instagram"
              className="text-white/70 hover:text-[color:var(--color-sunset-vivid)] transition"
            >
              <Icon name="photo_camera" />
            </a>
            <a
              href="https://wa.me/919921380894"
              aria-label="WhatsApp"
              className="text-white/70 hover:text-[color:var(--color-sunset-vivid)] transition"
            >
              <Icon name="chat" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-white mb-4">
            Explore
          </h4>
          <ul className="space-y-3 text-white/70">
            <li>
              <a href="#upcoming" className="hover:text-white transition">
                Upcoming Treks
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white transition">
                Expedition Gallery
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Safety Protocols
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-white mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-2">
              <Icon name="call" className="text-[16px] mt-1" />
              <span>
                +91 9921380894
                <br />
                +91 9405488089
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="text-[16px]" />
              <span>info@findingtrails.in</span>
            </li>
            <li className="flex items-start gap-2 mt-4 pt-4 border-t border-white/15">
              <Icon name="work" className="text-[16px] mt-1" />
              <span className="text-sm">
                Join Team:
                <br />
                findingtrails1@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 md:px-10 max-w-[1280px] mx-auto mt-10 pt-6 border-t border-white/15 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
        <p>© 2024 Finding Trails Adventure Co. Built for the wild.</p>
        <a
          href="https://maps.app.goo.gl/QcLw7WwpTsFUT6GK9"
          className="flex items-center gap-1 hover:text-[color:var(--color-sunset-vivid)] mt-2 md:mt-0 transition"
        >
          <Icon name="pin_drop" className="text-[16px]" /> Find Us On Google Maps
        </a>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <>
      <Rappeller />
      <header className="fixed top-0 inset-x-0 z-50">
        <Navbar
          logo={{ url: "#top", src: logoColor, alt: "Finding Trails" }}
          menu={[
            { title: "Trails", url: "#trails" },
            { title: "Upcoming", url: "#upcoming" },
            { title: "Gallery", url: "#gallery" },
            { title: "About Us", url: "#about" },
          ]}
          cta={{ text: "Book a Trek", url: "#upcoming" }}
        />
      </header>
      <main>
        <Hero />
        <Mission />
        <Trails />
        <Upcoming />
        <Gallery />
        <Founder />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}
