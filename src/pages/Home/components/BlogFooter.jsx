import {
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
  FaEnvelope, FaPhoneAlt, FaPlay, FaRegCopyright,
} from "react-icons/fa";
import { useStage } from "../../../hooks";

const BH = 1608; 

const intro =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";

const blurb =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.";

const posts = [
  { img: "snapchat.png", title: ["The snap pixel: how it", "works and how to install"] },
  { img: "instagram.png", title: ["Global partner solutions: a", "partnership of innovation"] },
  { img: "hand.png", title: ["2021: an opportunity for", "snapchatters to start fresh"] },
];

const quickLinks = [
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

const heading = "text-[25px] font-semibold uppercase leading-[37.5px] text-white";

function Post({ img, title }) {
  return (
    <article className="h-[500px] w-[370px] overflow-hidden rounded-sm bg-white shadow-[0_0_24px_rgba(35,34,51,0.1)]">
      <img src={`/images/${img}`} alt="" className="h-[228px] w-full object-cover" />
      <div className="px-[18px]">
        <h3 className="mt-[38px] text-[20px] font-semibold uppercase leading-[30px] text-ink">
          {title[0]}
          <br />
          {title[1]}
        </h3>
        <p className="mt-3 text-base leading-6 text-body">{blurb}</p>
        <a
          href="/blog/post"
          className="mt-[25px] inline-block text-[20px] font-medium uppercase leading-[30px] text-brand underline hover:text-brand-dark"
        >
          Read more
        </a>
      </div>
    </article>
  );
}

export default function BlogFooter() {
  const { s, stageW } = useStage();

  return (
    <section id="blog" className="relative w-full overflow-hidden bg-white" style={{ height: BH * s }}>
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: stageW, height: BH, transform: `scale(${s})` }}
      >
        
        <h2 className="absolute inset-x-0 top-[117px] text-center text-[31.25px] font-bold uppercase leading-[47px] text-ink">
          Our recent blog
        </h2>
        <p className="absolute left-1/2 top-[185px] w-[593px] -translate-x-1/2 text-center text-base leading-6 text-body">
          {intro}
        </p>

        
        <div className="absolute flex justify-between" style={{ left: "9.306%", width: "81.39%", top: 319 }}>
          {posts.map((p) => (
            <Post key={p.img} {...p} />
          ))}
        </div>

        
        <div className="absolute inset-x-0 bg-ink" style={{ top: 1068, height: 540 }} />

        
        <div
          className="absolute flex items-center rounded-[30px] bg-white shadow-[0_12px_40px_rgba(35,34,51,0.12)]"
          style={{ left: "9.306%", width: "81.39%", top: 940, height: 228 }}
        >
          <a href="mailto:info@youremail.com" className="flex w-1/2 items-center gap-5 pl-[50px] hover:opacity-80">
            <span className="flex h-[96px] w-[96px] items-center justify-center rounded-full bg-brand text-white">
              <FaEnvelope size={30} />
            </span>
            <span className="text-[20px] font-medium leading-[30px] text-ink">info@youremail.com</span>
          </a>
          <span className="absolute left-1/2 top-1/2 h-[115px] w-[2px] -translate-y-1/2 bg-ink" />
          <a href="tel:+8803216559985" className="flex w-1/2 items-center gap-5 pl-[50px] hover:opacity-80">
            <span className="flex h-[96px] w-[96px] items-center justify-center rounded-full bg-brand text-white">
              <FaPhoneAlt size={30} />
            </span>
            <span className="text-[20px] font-medium leading-[30px] text-ink">+880 321 655 9985</span>
          </a>
        </div>

        
        <div className="absolute" style={{ left: "9.306%", width: "81.39%", top: 1303 }}>
          
          <div className="absolute left-0 top-0">
            <h4 className={heading}>Logo</h4>
            <p className="mt-[10px] w-[334px] text-base leading-6 text-white">{blurb}</p>
          </div>
          <div className="absolute flex" style={{ left: -30, top: 160 }}>
            {socials.map(({ Icon, href, label }, i) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`flex h-[19px] w-[84px] items-center justify-center transition hover:text-brand ${
                  i > 0 ? "border-l border-white/30" : ""
                } ${i === 0 ? "text-white" : "text-white"}`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          
          <div className="absolute top-0" style={{ left: 401 }}>
            <h4 className={heading}>Quick link</h4>
            <ul className="mt-[10px] flex flex-col gap-3 text-base leading-6 text-white">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-brand">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="absolute top-0" style={{ left: 801 }}>
            <h4 className={heading}>News letter</h4>
            <p className="mt-[10px] w-[330px] text-base leading-6 text-white">
              Subscribe our newsletter to get our latest update &amp; news
            </p>
            <form
              className="absolute flex h-[49px] w-[368px]"
              style={{ top: 130 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="h-full flex-1 bg-white px-[14px] text-[12.8px] text-ink outline-none placeholder:text-body"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-full w-[54px] items-center justify-center bg-brand text-white hover:bg-brand-dark"
              >
                <FaPlay size={16} />
              </button>
            </form>
          </div>
        </div>

        
        <div className="absolute h-px bg-white/25" style={{ left: "9.306%", width: "81.39%", top: 1549 }} />
        <p
          className="absolute inset-x-0 flex items-center justify-center gap-2 text-base leading-6 text-white"
          style={{ top: 1566 }}
        >
          <FaRegCopyright size={16} /> Copyright 2021 .Ojjomedia. All Right Reserved.
        </p>
      </div>
    </section>
  );
}
