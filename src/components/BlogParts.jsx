import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars, FaTimes, FaSearch, FaPlay, FaRegCopyright,
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
} from "react-icons/fa";
import Navbar from "./Navbar";

export const wrap = "mx-auto w-[calc(100%-40px)] xl:w-[81.39%]";
const line = "border-[#e3e3ea]";
const h = "text-[20px] font-semibold uppercase leading-[30px] text-ink";

const menu = [
  ["Home", "/#home"], ["About", "/#about"], ["Features", "/#features"],
  ["Screenshot", "/#screenshot"], ["Blog", "/blog"],
];

const socials = [
  [FaFacebookF, "https://facebook.com", "Facebook"],
  [FaInstagram, "https://instagram.com", "Instagram"],
  [FaTwitter, "https://twitter.com", "Twitter"],
  [FaYoutube, "https://youtube.com", "YouTube"],
];


export function BlogHeader({ title, crumb }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="relative flex h-[300px] flex-col items-center justify-center overflow-hidden bg-brand bg-cover bg-top px-5 pt-[70px] text-center text-white xl:h-[400px] xl:pt-[120px]"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      
      <div className="hidden xl:block">
        <Navbar active="Blog" />
      </div>

      
      <div className="absolute inset-x-4 top-5 z-20 mx-auto max-w-[640px] xl:hidden">
        <nav className="relative flex h-[44px] items-center justify-between bg-white pl-3 pr-1.5">
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="text-ink">
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
          <a href="/#home" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="/images/logo.png" alt="Appolly" className="h-[56px] w-[124px] object-contain" />
          </a>
          <a
            href="/#screenshot"
            className="rounded-sm border border-white bg-brand px-3 py-1 text-[10px] font-medium uppercase text-white outline outline-1 outline-brand"
          >
            Download
          </a>
        </nav>
        {open && (
          <ul className="mt-1 space-y-4 bg-white p-5 text-left text-sm font-medium uppercase text-ink shadow-xl">
            {menu.map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        )}
      </div>

      <h1 className="max-w-[760px] text-[22px] font-bold uppercase leading-[1.5] sm:text-[31.25px] sm:leading-[47px]">
        {title}
      </h1>
      <p className="mt-3 flex items-center gap-2 text-[12.8px]">
        <span className="h-[6px] w-[6px] rounded-full bg-white" />
        {crumb}
      </p>
    </header>
  );
}


const recent = [
  ["recent-1.png", "Irina Rozovsky captures Brooklyn's Prospect Park in a romantic light"],
  ["recent-2.png", "A new online show is tracing leading artists' early commercial practice"],
  ["recent-3.png", "Think food bank project uses stickers to prompt people to contribute"],
  ["recent-4.png", "A new photo book is celebrating LA's vibrant lowrider culture"],
  ["recent-5.png", "The indie publishers adapting to the pandemic"],
];
const categories = ["E-commars app", "Banking app", "Business app", "Video app", "E-commars app"];
const tags = ["Ecommars app", "Music app", "Bank app", "Social app"];

export function Sidebar() {
  return (
    <aside>
      <form
        className={`flex h-[44px] items-center border px-3 ${line}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch size={12} className="text-body" />
        <input
          placeholder="Search for..."
          className="ml-2 w-full bg-transparent text-[12.8px] text-ink outline-none placeholder:text-body"
        />
      </form>

      <h3 className={`${h} mt-[34px]`}>Recent post</h3>
      <div className="mt-5 space-y-[44px]">
        {recent.map(([img, title]) => (
          <Link key={img} to="/blog/post" className="block">
            <img src={`/images/blog/${img}`} alt="" className="aspect-[780/400] w-full object-cover" />
            <h4 className="mt-[14px] text-[16px] font-semibold uppercase leading-6 text-ink">{title}</h4>
          </Link>
        ))}
      </div>

      <hr className={`my-9 ${line}`} />
      <h3 className={h}>Category</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[12.8px] uppercase text-body marker:text-ink">
        {categories.map((c, i) => <li key={i}>{c}</li>)}
      </ul>

      <hr className={`my-9 ${line}`} />
      <h3 className={h}>Tags</h3>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-[12.8px] font-medium uppercase text-ink">
        {tags.map((t) => <a key={t} href="/blog" className="hover:text-brand">{t}</a>)}
      </div>
    </aside>
  );
}


const quick = [["About", "/#about"], ["Features", "/#features"], ["Screenshot", "/#screenshot"], ["Blog", "/blog"]];
const lead =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.";

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-8 pt-14 text-white xl:pt-[85px]">
      <div className={`${wrap} grid gap-10 md:grid-cols-3 md:gap-0`}>
        <div>
          <h4 className="text-[31.25px] font-semibold uppercase leading-[37.5px]">Logo</h4>
          <p className="mt-[10px] max-w-[334px] text-base leading-6">{lead}</p>
          <div className="-ml-[30px] mt-9 flex">
            {socials.map(([Icon, href, label], i) => (
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
        </div>

        <div>
          <h4 className="text-[25px] font-semibold uppercase leading-[37.5px]">Quick link</h4>
          <ul className="mt-[10px] space-y-3 text-base leading-6">
            {quick.map(([label, href]) => (
              <li key={label}><a href={href} className="transition hover:text-brand">{label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[25px] font-semibold uppercase leading-[37.5px]">News letter</h4>
          <p className="mt-[10px] max-w-[330px] text-base leading-6">
            Subscribe our newsletter to get our latest update &amp; news
          </p>
          <form className="mt-[38px] flex h-[49px] max-w-[368px]" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="h-full min-w-0 flex-1 bg-white px-[14px] text-[12.8px] text-ink outline-none placeholder:text-body"
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

      <div className={`${wrap} mt-14 border-t border-white/25 pt-4`}>
        <p className="flex items-center justify-center gap-2 text-center text-base leading-6">
          <FaRegCopyright size={16} /> Copyright 2021 .Ojjomedia. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}