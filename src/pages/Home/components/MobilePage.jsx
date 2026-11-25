import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaCheckCircle,
  FaDownload,
  FaThumbsUp,
  FaStar,
  FaEnvelope,
  FaPhoneAlt,
  FaPlay,
  FaRegCopyright,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import StoreBadges from "../../../components/StoreBadges";

const para =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";
const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const blurb =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Features", "#features"],
  ["Screenshot", "#screenshot"],
  ["Blog", "/blog"],
];

const socials = [
  { Icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

const stats = [
  { icon: FaDownload, value: "59865", label: "Download" },
  { icon: FaThumbsUp, value: "29852", label: "Like" },
  { icon: FaStar, value: "1500", label: "5 Star rating" },
];

const feats = [
  ["comment.png", "Full free chat"],
  ["browser.png", "Unlimiter features"],
  ["vector.png", "Awsome ui design"],
  ["cell-phone.png", "Iso & android version"],
  ["eye-scanner.png", "Retina ready greaphics"],
  ["male-telemarketer.png", "24/7 support by real pepole"],
];

const team = [
  {
    name: "Carla Press",
    role: "App developer",
    img: "team-carla.png",
    active: true,
  },
  { name: "Craig Gouse", role: "UI/UX designer", img: "team-craig.png" },
  {
    name: "Jocelyn Septimus",
    role: "Website developer",
    img: "team-jocelyn.png",
  },
];

const posts = [
  {
    img: "snapchat.png",
    title: "The snap pixel: how it works and how to install",
  },
  {
    img: "instagram.png",
    title: "Global partner solutions: a partnership of innovation",
  },
  {
    img: "hand.png",
    title: "2021: an opportunity for snapchatters to start fresh",
  },
];

const cardShadow = "shadow-[0_0_24px_rgba(35,34,51,0.1)]";

function Title({ children, light }) {
  return (
    <h2
      className={`text-center text-[22px] font-bold uppercase leading-[1.5] sm:text-[28px] ${light ? "text-white" : "text-ink"}`}
    >
      {children}
    </h2>
  );
}

function Lead({ children, light }) {
  return (
    <p
      className={`mx-auto mt-3 max-w-[560px] text-center text-[13px] leading-5 sm:text-base sm:leading-6 ${light ? "text-white" : "text-body"}`}
    >
      {children}
    </p>
  );
}

function Dots({ light }) {
  return (
    <div className="mt-6 flex justify-center gap-3">
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`h-[10px] w-[10px] rounded-full ${light ? "bg-white" : "bg-brand"} ${
            i === 0
              ? light
                ? "ring-4 ring-white/30"
                : "ring-4 ring-brand/20"
              : ""
          }`}
        />
      ))}
    </div>
  );
}

function Socials({ tone = "ink", first = false, big = false, className = "" }) {
  return (
    <div className={`flex ${className}`}>
      {socials.map(({ Icon, href, label }, i) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`flex ${big ? "h-[24px] w-[84px]" : "h-[18px] w-[64px]"} items-center justify-center ${
            i > 0
              ? tone === "white"
                ? "border-l border-white/30"
                : "border-l border-[#d9d9e0]"
              : ""
          } ${first && i === 0 ? "text-brand" : tone === "white" ? "text-white" : "text-ink"}`}
        >
          <Icon size={big ? 22 : 15} />
        </a>
      ))}
    </div>
  );
}

function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand bg-cover bg-top px-4 pb-10 pt-5"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="relative mx-auto max-w-[640px]">
        <nav className="relative flex h-[44px] items-center justify-between bg-white pl-3 pr-1.5">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-ink"
          >
            <FaBars size={18} />
          </button>
          <a
            href="#home"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="/images/logo.png"
              alt="Appolly"
              className="h-[56px] w-[124px] object-contain"
            />
          </a>
          <a
            href="#screenshot"
            className="rounded-sm border border-white bg-brand px-3 py-1 text-[10px] font-medium uppercase text-white outline-brand"
          >
            Download
          </a>
        </nav>

        {open && (
          <div className="absolute left-0 top-0 z-30 w-[220px] bg-white p-6 shadow-xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white"
            >
              <FaTimes size={13} />
            </button>
            <ul className="mt-10 space-y-6 text-sm font-medium uppercase text-ink">
              {links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} onClick={() => setOpen(false)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="relative mt-16 mr-3 ml-1">
          <div className="absolute -bottom-3 -right-3 -top-3 left-3 border-[8px] border-brand-light/60" />
          <div className="relative bg-white p-5">
            <h1 className="text-[22px] font-bold uppercase leading-[1.3] text-brand sm:text-[32px]">
              A great app makes your life better
            </h1>
            <p className="mt-3 text-[13px] leading-5 text-body sm:text-base sm:leading-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <h3 className="mt-5 text-[16px] font-semibold uppercase leading-6 text-ink sm:text-[20px]">
              Download app now
            </h3>
            <StoreBadges height={32} gap={10} className="mt-2" />
          </div>
        </div>

        <img
          src="/images/hero-phone.png"
          alt="App preview"
          className="relative mx-auto mt-6 left-11 block w-[340px] max-w-full"
        />
      </div>
    </section>
  );
}

function AboutSection() {
  const items = ["Creative design", "Easy to use", "Best user experince"];
  return (
    <section id="about" className="bg-white px-5 py-14">
      <div className="mx-auto max-w-[640px]">
        <Title>About our app</Title>
        <Lead>{para}</Lead>
        <img
          src="/images/about-phones.png"
          alt="App screens"
          className="mx-auto mt-6 w-[260px]"
        />
        <div className="mt-6 space-y-4">
          {items.map((t) => (
            <div
              key={t}
              className={`relative rounded-sm bg-white p-5 pl-12 ${cardShadow}`}
            >
              <FaCheckCircle
                className="absolute left-4 top-[22px] text-brand"
                size={18}
              />
              <h4 className="text-[16px] font-semibold uppercase leading-6 text-ink">
                {t}
              </h4>
              <p className="mt-2 text-[13px] leading-5 text-body">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section
      id="features"
      className="overflow-hidden bg-brand bg-cover px-5 py-14 text-white"
      style={{ backgroundImage: "url('/images/features-bg.png')" }}
    >
      <div className="mx-auto max-w-[640px]">
        <Title light>App features</Title>
        <p className="mx-auto mt-3 max-w-[300px] text-center text-base leading-6 text-white">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
</p>
        <div className="mt-8 flex flex-col items-center gap-12 text-center">
          {feats.map(([icon, title], i) => (
            <div key={title} className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center">
                <img
                  src={`/images/icons/${icon}`}
                  alt=""
                  className="h-[46px] w-auto"
                />
                <h3 className="mt-4 max-w-[230px] text-[20px] font-semibold uppercase leading-[30px]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[230px] text-base leading-6">
                  {short}
                </p>
              </div>
              {i === 2 && (
                <img
                  src="/images/app-phone.png"
                  alt="App screen"
                  className="w-[320px] max-w-none translate-x-[22px]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckoutSection() {
  return (
    <section id="screenshot" className="bg-white px-5 py-14">
      <div className="mx-auto max-w-[640px]">
        <Title>Checkout our app interface look</Title>
        <Lead>{para}</Lead>
        <img
          src="/images/checkout-slider.png"
          alt="App screens"
          className="mt-6 w-full"
        />
        <Dots />

        <div id="download" className="mt-14">
          <h3 className="text-[25px] font-semibold uppercase leading-[1.5] text-ink">
            Download app now
          </h3>
          <p className="mt-2 text-[13px] leading-5 text-body">{para}</p>
          <StoreBadges height={34} gap={14} className="mt-5" />
          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <a
                key={label}
                href="#download"
                className="flex flex-col items-center rounded-sm bg-brand px-1 py-4 text-center text-white"
              >
                <Icon size={20} />
                <span className="mt-2 text-[18px] font-semibold leading-6">
                  {value}
                </span>
                <span className="mt-1 text-[10px] font-medium uppercase leading-4">
                  {label}
                </span>
              </a>
            ))}
          </div>
          <img
            src="/images/download-phones.png"
            alt="App on two phones"
            className="mx-auto mt-8 w-[320px]"
          />
        </div>
      </div>
    </section>
  );
}

function Member({ name, role, img, active }) {
  return (
    <div
      className={`rounded-sm bg-white px-5 pb-6 pt-6 text-center ${cardShadow}`}
    >
      <div className="relative mx-auto h-[150px] w-[150px]">
        <svg viewBox="0 0 220 220" className="absolute inset-0 h-full w-full">
          <circle
            cx="110"
            cy="110"
            r="108"
            fill="none"
            strokeWidth="3"
            className="stroke-brand"
            strokeDasharray="159.65 10"
            strokeDashoffset="-5"
          />
        </svg>
        <img
          src={`/images/${img}`}
          alt={name}
          className="absolute left-[7px] top-[7px] h-[136px] w-[136px] rounded-full object-cover"
        />
      </div>
      <h4 className="mt-5 text-[22px] font-semibold uppercase leading-8 text-ink">
        {name}
      </h4>
      <p className="text-[14px] font-medium uppercase leading-6 text-body">
        {role}
      </p>
      <p className="mx-auto mt-3 max-w-[300px] text-[13px] leading-5 text-body">
        {blurb}
      </p>
      <Socials first={active} className="mt-4 justify-center" />
    </div>
  );
}

function HowToSection() {
  return (
    <section id="how-to" className="overflow-x-hidden bg-white">
      <div
        className="bg-brand bg-cover px-5 pb-32 pt-14"
        style={{ backgroundImage: "url('/images/howto-bg.png')" }}
      >
        <Title light>How to use the app perfectly</Title>
        <Lead light>{para}</Lead>
      </div>
      <div className="relative z-10 -mt-28 flex justify-center">
        <img
          src="/images/howto-video.png"
          alt="How to use the app"
          className="w-[430px] max-w-none"
        />
      </div>
      <div className="mx-auto max-w-[640px] px-5 pb-14 pt-6">
        <Title>Our reative team</Title>
        <Lead>{para}</Lead>
        <div className="mt-8 space-y-5">
          {team.map((m) => (
            <Member key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomersSection() {
  return (
    <section
      id="customers"
      className="bg-brand bg-cover px-5 py-14"
      style={{ backgroundImage: "url('/images/customers-bg.png')" }}
    >
      <div className="mx-auto max-w-[640px]">
        <Title light>Our happy customers</Title>
        <Lead light>{para}</Lead>
        <div className="mt-8 rounded-sm bg-white px-5 pb-8 pt-8 text-center shadow-[0_12px_40px_rgba(35,34,51,0.2)]">
          <img
            src="/images/customer-ann.png"
            alt="Ann Lubin"
            className="mx-auto h-[84px] w-[84px] rounded-full object-cover"
          />
          <h4 className="mt-4 text-[22px] font-semibold uppercase leading-8 text-ink">
            Ann Lubin
          </h4>
          <p className="text-[14px] font-medium uppercase leading-6 text-ink">
            Co-founder
          </p>
          <p className="mt-3 text-[13px] leading-5 text-body">{para}</p>
        </div>
        <Dots light />
      </div>
    </section>
  );
}

function BlogFooterSection() {
  return (
    <>
      <section id="blog" className="bg-white px-5 pb-0 pt-14">
        <div className="mx-auto max-w-[640px]">
          <Title>Our recent blog</Title>
          <Lead>{para}</Lead>
          <div className="mt-8 space-y-5">
            {posts.map((p) => (
              <article
                key={p.img}
                className={`overflow-hidden rounded-sm bg-white ${cardShadow}`}
              >
                <img
                  src={`/images/${p.img}`}
                  alt=""
                  className="h-[200px] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-[16px] font-semibold uppercase leading-6 text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-5 text-body">
                    {blurb}
                  </p>
                  <a
                    href="/blog/post"
                    className="mt-3 inline-block text-[16px] font-medium uppercase text-brand underline"
                  >
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="relative z-10 mt-14 translate-y-[165px] space-y-6 rounded-[24px] bg-white p-8 shadow-[0_12px_40px_rgba(35,34,51,0.12)]">
            <a
              href="mailto:info@youremail.com"
              className="flex flex-col items-center gap-5 text-center"
            >
              <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <FaEnvelope size={20} />
              </span>
              <span className="text-[20px] font-medium uppercase text-ink">
                INFO.DESIGN@GMAIL.COM
              </span>
            </a>
            <hr className="mx-auto w-[120px] border-t-[3px] border-ink" />
            <a
              href="tel:+8803216559985"
              className="flex flex-col items-center gap-5 text-center"
            >
              <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <FaPhoneAlt size={20} />
              </span>
              <span className="text-[20px] font-medium text-ink">
                +880 321 655 9985
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 pb-8 pt-[230px] text-white">
        <div className="mx-auto max-w-[640px] space-y-14">
          <div>
            <h4 className="text-[32px] font-semibold uppercase leading-[1.3]">
              Logo
            </h4>
            <p className="mt-2 text-base leading-6">{blurb}</p>
            <Socials tone="white" big className="mt-8 -ml-[31px]" />
          </div>
          <div>
            <h4 className="text-[25px] font-semibold uppercase leading-[1.4]">
              Quick link
            </h4>
            <ul className="mt-2 space-y-3 text-base">
              {links.slice(1).map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[20px] font-semibold uppercase leading-7">
              News letter
            </h4>
            <p className="mt-2 text-base leading-6">
              Subscribe our newsletter to get our latest update &amp; news
            </p>
            <form
              className="mt-4 flex h-[44px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="h-full min-w-0 flex-1 bg-white px-3 text-[13px] text-ink outline-none placeholder:text-body"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-full w-[50px] items-center justify-center bg-brand text-white"
              >
                <FaPlay size={14} />
              </button>
            </form>
          </div>
          <div className="border-t border-white/25 pt-4">
            <p className="flex items-center justify-center gap-2 text-center text-[12px] leading-5">
              <FaRegCopyright size={13} /> Copyright 2021 .Ojjomedia. All Right
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function MobilePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CheckoutSection />
      <HowToSection />
      <CustomersSection />
      <BlogFooterSection />
    </>
  );
}
