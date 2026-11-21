import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import {
  FaBars, FaTimes, FaCheckCircle, FaChevronLeft, FaChevronRight,
  FaDownload, FaThumbsUp, FaStar, FaEnvelope, FaPhoneAlt, FaPlay, FaRegCopyright,
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
} from "react-icons/fa";
import StoreBadges from "./StoreBadges";
import useZoom from "../useZoom";

const intro =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus.";
const long =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";
const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const blurb =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.";

const socialLinks = [
  [FaFacebookF, "https://facebook.com", "Facebook"],
  [FaInstagram, "https://instagram.com", "Instagram"],
  [FaTwitter, "https://twitter.com", "Twitter"],
  [FaYoutube, "https://youtube.com", "YouTube"],
];

const menu = [
  ["Home", "#home"], ["About", "#about"], ["Features", "#features"],
  ["Screenshot", "#screenshot"], ["Blog", "/blog"],
];

const shadow = "shadow-[0_0_24px_rgba(35,34,51,0.1)]";

const Sec = ({ id, h, className = "", style, children }) => (
  <section id={id} className={`relative w-full overflow-hidden ${className}`} style={{ height: h, ...style }}>
    {children}
  </section>
);

const A = ({ style, className = "", children }) => (
  <div className={`absolute ${className}`} style={style}>{children}</div>
);

const H2 = ({ top, light, w = 686, children }) => (
  <h2
    className={`absolute left-1/2 -translate-x-1/2 text-center text-[31.25px] font-bold uppercase leading-[47px] ${
      light ? "text-white" : "text-ink"
    }`}
    style={{ top, width: w }}
  >
    {children}
  </h2>
);

const Lead = ({ top, light, w = 440, children }) => (
  <p
    className={`absolute left-1/2 -translate-x-1/2 text-center text-base leading-6 ${light ? "text-white" : "text-body"}`}
    style={{ top, width: w }}
  >
    {children}
  </p>
);

const Socials = ({ size = 14, gap = 20 }) => (
  <div className="flex items-center" style={{ gap }}>
    {socialLinks.map(([Icon, href, label]) => (
      <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="transition hover:opacity-70">
        <Icon size={size} />
      </a>
    ))}
  </div>
);

const Divided = ({ w, white, first, className = "" }) => (
  <div className={`flex ${className}`}>
    {socialLinks.map(([Icon, href, label], i) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        style={{ width: w }}
        className={`flex h-[19px] items-center justify-center transition hover:text-brand ${
          i > 0 ? (white ? "border-l border-white/30" : "border-l border-[#d9d9e0]") : ""
        } ${first && i === 0 ? "text-brand" : white ? "text-white" : "text-ink"}`}
      >
        <Icon size={15} />
      </a>
    ))}
  </div>
);

const Dots = ({ top, light }) => (
  <A className="flex -translate-x-1/2 items-center gap-[14px]" style={{ left: "50%", top }}>
    {[0, 1, 2, 3, 4].map((i) => (
      <span
        key={i}
        className={`h-[12px] w-[12px] rounded-full ${light ? "bg-white" : "bg-brand"} ${
          i === 0 ? (light ? "ring-4 ring-white/30" : "ring-4 ring-brand/20") : ""
        }`}
      />
    ))}
  </A>
);

function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <Sec
      id="home"
      h={1024}
      className="bg-brand bg-cover"
      style={{ backgroundImage: "url('/images/hero-bg.png')", backgroundPosition: "72% bottom" }}
    >
      
      <A className="flex items-center justify-between text-base leading-6 text-white" style={{ left: 41, right: 40, top: 24 }}>
        <div className="flex items-center gap-[50px]">
          <a href="mailto:Info@youremail.com" className="flex items-center gap-5"><Mail size={16} /> info@youremail.com</a>
          <a href="tel:+14805550103" className="flex items-center gap-5"><Phone size={16} /> (480) 555-0103</a>
        </div>
        <Socials size={16} gap={32} />
      </A>

      
      <A className="bg-white" style={{ left: 41, right: 40, top: 84, height: 59 }}>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="absolute left-[14px] top-1/2 -translate-y-1/2 text-ink"
        >
          <FaBars size={20} />
        </button>
        <a
          href="#screenshot"
          className="absolute right-[3px] top-1/2 flex h-[49px] w-[161px] -translate-y-1/2 items-center justify-center border-2 border-white bg-brand text-[20px] font-medium uppercase text-white outline outline-1 outline-brand hover:bg-brand-dark"
        >
          Download
        </a>
      </A>
      <a href="#home" className="absolute" style={{ left: 257, top: 58 }}>
        <img src="/images/logo.png" alt="Appolly" className="h-[112px] w-[250px] object-contain" />
      </a>

      
      {open && (
        <A className="z-30 bg-white shadow-xl" style={{ left: 39, top: 84, width: 266, height: 355 }}>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute flex h-[35px] w-[35px] items-center justify-center rounded-full bg-brand text-white"
            style={{ left: 206, top: 24 }}
          >
            <FaTimes size={13} />
          </button>
          <ul
            className="absolute space-y-[25px] text-[20px] font-medium uppercase leading-[30px] text-ink"
            style={{ left: 40, top: 64 }}
          >
            {menu.map(([label, href]) => (
              <li key={label}><a href={href} onClick={() => setOpen(false)} className="hover:text-brand">{label}</a></li>
            ))}
          </ul>
        </A>
      )}

      
      <A className="border-[18px] border-brand-light/60" style={{ left: 54, top: 414, width: 378, height: 382 }} />
      <A className="bg-white" style={{ left: 39, top: 447, width: 357, height: 319, padding: "11px 0 0 19px" }}>
        <h1 className="whitespace-nowrap text-[31.25px] font-bold uppercase leading-[47px] text-brand">
          A great app makes<br />your life better
        </h1>
        <p className="mt-[10px] pr-2 text-base leading-6 text-body">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
          enim velit mollit.
        </p>
        <h3 className="mt-[14px] text-[20px] font-semibold uppercase leading-[30px] text-ink">Download app now</h3>
        <StoreBadges height={44} gap={18} className="mt-[27px]" />
      </A>

      {/* Phone */}
      <img src="/images/hero-phone.png" alt="App preview" className="absolute max-w-none" style={{ left: 486, top: 380, width: 330 }} />
    </Sec>
  );
}


function AboutSection() {
  const items = ["Creative design", "Easy to use", "Best user experince"];
  return (
    <Sec id="about" h={850} className="bg-white">
      <H2 top={117}>About our app</H2>
      <Lead top={185}>{intro}</Lead>

      <img src="/images/about-phones.png" alt="App screens" className="absolute max-w-none" style={{ left: 36, top: 318, width: 245 }} />

      <A style={{ left: 336, top: 318, width: 392 }}>
        {items.map((t) => (
          <div key={t} className={`relative mb-[23px] h-[109px] rounded-sm bg-white pl-[62px] pr-3 pt-[18px] ${shadow}`}>
            <FaCheckCircle className="absolute left-5 top-[24px] text-brand" size={18} />
            <h4 className="text-[18px] font-semibold uppercase leading-[27px] text-ink">{t}</h4>
            <p className="mt-[8px] text-base leading-6 text-body">{short}</p>
          </div>
        ))}
      </A>
    </Sec>
  );
}


const P = 545;

function Feat({ icon, h, title, align, w, style }) {
  const al = {
    left: "items-start text-left",
    right: "items-end text-right",
    center: "items-center text-center",
  }[align];
  return (
    <div className={`absolute flex flex-col ${al}`} style={{ width: w, ...style }}>
      <div className="flex h-[50px] items-center">
        <img src={`/images/icons/${icon}`} alt="" style={{ height: h }} className="w-auto" />
      </div>
      <h3 className="mt-[28px] text-[20px] font-semibold uppercase leading-[30px] text-white">{title}</h3>
      <p className="mt-[19px] text-base leading-6 text-white">{short}</p>
    </div>
  );
}

function FeaturesSection() {
  const mid = { left: "50%", transform: "translateX(-50%)" };

  return (
    <Sec
      id="features"
      h={P + 819}
      className="bg-brand"
      style={{ backgroundImage: "url('/images/features-bg.png')", backgroundSize: "100% 100%" }}
    >
      <H2 top={114} light>App features</H2>
      <Lead top={185} light w={440}>{intro}</Lead>

      <Feat icon="comment.png" h={44} title="Full free chat" align="center" w={230} style={{ ...mid, top: P - 231 }} />

      <img src="/images/app-phone.png" alt="App screen" className="absolute max-w-none" style={{ left: 242, top: P - 28, width: 327 }} />

      <Feat icon="browser.png" h={50} title="Unlimiter features" align="right" w={240} style={{ right: 509, top: P + 20 }} />
      <Feat icon="cell-phone.png" h={50} title="Iso & android version" align="left" w={220} style={{ left: 510, top: P + 17 }} />
      <Feat icon="vector.png" h={52} title="Awsome ui design" align="right" w={240} style={{ right: 509, top: P + 275 }} />
      <Feat icon="eye-scanner.png" h={56} title="Retina ready greaphics" align="left" w={220} style={{ left: 510, top: P + 271 }} />

      <Feat icon="male-telemarketer.png" h={50} title="24/7 support by real pepole" align="center" w={360} style={{ ...mid, top: P + 528 }} />
    </Sec>
  );
}


const stats = [
  [FaDownload, "59865", "Download"],
  [FaThumbsUp, "29852", "Like"],
  [FaStar, "1500", "5 Star rating"],
];

function CheckoutSection() {
  return (
    <Sec id="screenshot" h={1543} className="bg-white">
      <H2 top={110} w={460}>Checkout our app interface look</H2>
      <Lead top={232}>{intro}</Lead>

      <img src="/images/checkout-slider.png" alt="App screens" className="absolute max-w-none" style={{ left: 84, top: 335, width: 600 }} />
      <button
        aria-label="Previous"
        className="absolute flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-brand bg-white text-brand"
        style={{ left: 20, top: 480 }}
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        aria-label="Next"
        className="absolute flex h-[56px] w-[56px] items-center justify-center rounded-full bg-brand text-white"
        style={{ left: 692, top: 480 }}
      >
        <FaChevronRight size={18} />
      </button>
      <Dots top={720} />

      
      <h3 className="absolute text-[31.25px] font-semibold uppercase leading-[47px] text-ink" style={{ left: 41, top: 1000, width: 330 }}>
        Download app now
      </h3>
      <p className="absolute text-base leading-6 text-body" style={{ left: 41, top: 1100, width: 330 }}>{long}</p>
      <A style={{ left: 41, top: 1256 }}>
        <StoreBadges height={40} gap={19} />
      </A>
      <A className="flex gap-[20px]" style={{ left: 41, top: 1330 }}>
        {stats.map(([Icon, value, label]) => (
          <a
            key={label}
            href="#screenshot"
            className="flex h-[126px] w-[96px] flex-col items-center rounded-sm bg-brand pt-[18px] text-white transition hover:-translate-y-1 hover:bg-brand-dark"
          >
            <Icon size={22} />
            <span className="mt-[8px] text-[18px] font-semibold leading-[27px]">{value}</span>
            <span className="mt-[4px] px-1 text-center text-[11px] font-medium uppercase leading-[15px]">{label}</span>
          </a>
        ))}
      </A>
      <img src="/images/download-phones.png" alt="App on two phones" className="absolute max-w-none" style={{ left: 410, top: 1060, width: 350 }} />
    </Sec>
  );
}


const team = [
  { name: "Carla Press", role: "App developer", img: "team-carla.png", first: true },
  { name: "Craig Gouse", role: "UI/UX designer", img: "team-craig.png" },
  { name: "Jocelyn Septimus", role: "Website developer", img: "team-jocelyn.png" },
];

function Member({ name, role, img, first }) {
  return (
    <div className={`flex h-[380px] w-[214px] flex-col items-center rounded-sm bg-white pt-[22px] ${shadow}`}>
      <div className="relative h-[130px] w-[130px]">
        <svg viewBox="0 0 220 220" className="absolute inset-0 h-full w-full">
          <circle cx="110" cy="110" r="108" fill="none" strokeWidth="3" className="stroke-brand" strokeDasharray="159.65 10" strokeDashoffset="-5" />
        </svg>
        <img src={`/images/${img}`} alt={name} className="absolute left-[6px] top-[6px] h-[118px] w-[118px] rounded-full object-cover" />
      </div>
      <h4 className="mt-[26px] text-[18px] font-semibold uppercase leading-[27px] text-ink">{name}</h4>
      <p className="text-[13px] font-medium uppercase leading-[21px] text-body">{role}</p>
      <p className="mt-[14px] w-[178px] text-center text-[12.8px] leading-5 text-body">{blurb}</p>
      <Divided w={46} first={first} className="mt-[20px]" />
    </div>
  );
}

function HowToSection() {
  return (
    <Sec id="how-to" h={1384} className="bg-white">
      <div
        className="absolute left-0 top-0 w-full bg-brand"
        style={{ height: 400, backgroundImage: "url('/images/howto-bg.png')", backgroundSize: "100% 100%" }}
      />
      <H2 top={100} light w={460}>How to use the app perfectly</H2>
      <Lead top={214} light>{intro}</Lead>

      <img src="/images/howto-video.png" alt="How to use the app" className="absolute max-w-none" style={{ left: 56, top: 290, width: 655 }} />

      <H2 top={636}>Our reative team</H2>
      <Lead top={704}>{intro}</Lead>

      <A className="flex gap-[22px]" style={{ left: 41, top: 855 }}>
        {team.map((m) => <Member key={m.name} {...m} />)}
      </A>
    </Sec>
  );
}


function CardText({ name, role, avatar, padX }) {
  return (
    <div className="relative h-full">
      {avatar && (
        <img src={avatar} alt={name} className="absolute left-1/2 top-[18px] h-[50px] w-[50px] -translate-x-1/2 rounded-full object-cover" />
      )}
      <h4 className="absolute inset-x-0 top-[78px] text-center text-[20px] font-semibold uppercase leading-[30px] text-ink">{name}</h4>
      <p className="absolute inset-x-0 top-[110px] text-center text-[14px] font-medium uppercase leading-[21px] text-ink">{role}</p>
      <p className="absolute text-center text-base leading-6 text-body" style={{ top: 148, left: padX, right: padX }}>{long}</p>
    </div>
  );
}

function CustomersSection() {
  return (
    <Sec
      id="customers"
      h={746}
      className="bg-brand"
      style={{ backgroundImage: "url('/images/customers-bg.png')", backgroundSize: "100% 100%" }}
    >
      <H2 top={115} light>Our happy customers</H2>
      <Lead top={185} light>{intro}</Lead>

      <A className="overflow-hidden rounded-sm bg-white" style={{ left: 41, top: 315, width: 330, height: 226 }}>
        <CardText name="Amy Wilson" role="Designer" padX={22} />
      </A>
      <A className="overflow-hidden rounded-sm bg-white" style={{ left: 399, top: 315, width: 330, height: 226 }}>
        <CardText name="Jon Martin" role="Developer" padX={22} />
      </A>
      <A className="overflow-hidden rounded-sm bg-white shadow-[0_12px_40px_rgba(35,34,51,0.2)]" style={{ left: 159, top: 296, width: 450, height: 266 }}>
        <CardText name="Ann Lubin" role="Co-founder" avatar="/images/customer-ann.png" padX={40} />
      </A>

      <Dots top={606} light />
    </Sec>
  );
}


const posts = [
  { img: "blog-1.png", title: "The snap pixel: how it works and how to install" },
  { img: "blog-2.png", title: "Global partner solutions: a partnership of innovation" },
  { img: "blog-3.png", title: "2021: an opportunity for snapchatters to start fresh" },
];

const quick = [["About", "#about"], ["Features", "#features"], ["Screenshot", "#screenshot"], ["Blog", "/blog"]];

function BlogFooterSection() {
  return (
    <Sec id="blog" h={1561} className="bg-white">
      <H2 top={115}>Our recent blog</H2>
      <Lead top={185}>{intro}</Lead>

      <A className="flex gap-[22px]" style={{ left: 41, top: 279 }}>
        {posts.map((p) => (
          <article key={p.img} className={`h-[646px] w-[214px] rounded-sm bg-white p-2 ${shadow}`}>
            <img src={`/images/${p.img}`} alt="" className="h-[229px] w-full object-cover" />
            <h3 className="mt-[38px] px-3 text-base font-semibold uppercase leading-6 text-ink">{p.title}</h3>
            <p className="mt-[14px] px-3 text-base leading-6 text-body">{blurb}</p>
            <Link to="/blog/post" className="ml-3 mt-[36px] inline-block text-base font-medium uppercase leading-6 text-brand underline hover:text-brand-dark">
              Read more
            </Link>
          </article>
        ))}
      </A>

      
      <A className="bg-ink" style={{ left: 0, right: 0, top: 1124, height: 437 }} />

      
      <A
        className="flex items-center rounded-[30px] bg-white shadow-[0_12px_40px_rgba(35,34,51,0.12)]"
        style={{ left: 41, top: 1050, width: 688, height: 138 }}
      >
        <a href="mailto:info@youremail.com" className="flex w-1/2 items-center gap-4 pl-[28px] hover:opacity-80">
          <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-brand text-white"><FaEnvelope size={22} /></span>
          <span className="text-[18px] font-medium text-ink">info@youremail.com</span>
        </a>
        <span className="absolute left-1/2 top-1/2 h-[74px] w-[2px] -translate-y-1/2 bg-ink" />
        <a href="tel:+8803216559985" className="flex w-1/2 items-center gap-4 pl-[28px] hover:opacity-80">
          <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-brand text-white"><FaPhoneAlt size={22} /></span>
          <span className="text-[18px] font-medium text-ink">+880 321 655 9985</span>
        </a>
      </A>

      
      <A className="text-white" style={{ left: 41, top: 1257, width: 238 }}>
        <h4 className="text-[31.25px] font-semibold uppercase leading-[37.5px]">Logo</h4>
        <p className="mt-[10px] text-base leading-6">{blurb}</p>
      </A>
      <A style={{ left: 11, top: 1415 }}>
        <Divided w={60} white first />
      </A>

      <A className="text-white" style={{ left: 279, top: 1257 }}>
        <h4 className="text-[20px] font-semibold uppercase leading-[37.5px]">Quick link</h4>
        <ul className="mt-[10px] space-y-1 text-[14px] leading-[22px]">
          {quick.map(([label, href]) => (
            <li key={label}><a href={href} className="transition hover:text-brand">{label}</a></li>
          ))}
        </ul>
      </A>

      <A className="text-white" style={{ left: 517, top: 1257, width: 211 }}>
        <h4 className="text-[20px] font-semibold uppercase leading-[37.5px]">News letter</h4>
        <p className="mt-[10px] text-[14px] leading-[22px]">Subscribe our newsletter to get our latest update &amp; news</p>
        <form className="mt-[36px] flex h-[49px]" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="h-full min-w-0 flex-1 bg-white px-3 text-[12.8px] text-ink outline-none placeholder:text-body"
          />
          <button type="submit" aria-label="Subscribe" className="flex h-full w-[48px] items-center justify-center bg-brand text-white hover:bg-brand-dark">
            <FaPlay size={14} />
          </button>
        </form>
      </A>

      <A className="h-px bg-white/25" style={{ left: 41, right: 41, top: 1497 }} />
      <p className="absolute inset-x-0 flex items-center justify-center gap-2 text-base leading-6 text-white" style={{ top: 1515 }}>
        <FaRegCopyright size={15} /> Copyright 2021 .Ojjomedia. All Right Reserved.
      </p>
    </Sec>
  );
}


export default function TabletPage() {
  const zoom = useZoom();

  return (
    <div style={{ zoom }}>
      <div className="mx-auto" style={{ width: 768 }}>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <CheckoutSection />
        <HowToSection />
        <CustomersSection />
        <BlogFooterSection />
      </div>
    </div>
  );
}