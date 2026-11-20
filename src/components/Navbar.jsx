import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const left = ["Home", "About", "Features"];
const right = ["Screenshot", "Blog"];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-white">
      
      <div className="mx-auto flex w-[81.39%] items-center justify-between pb-[19px] pt-[35px] text-sm">
        <div className="flex items-center gap-8">
          <a href="mailto:Info@youremail.com" className="flex items-center gap-2 hover:opacity-80"><Mail size={16} /> Info@youremail.com</a>

          <a href="tel:+14805550103" className="flex items-center gap-2 hover:opacity-80"><Phone size={16} /> (480) 555-0103</a>
        </div>
        <div className="flex items-center gap-5">
          {[
            [FaFacebookF, "https://facebook.com", "Facebook"],
            [FaInstagram, "https://instagram.com", "Instagram"],
            [FaTwitter, "https://twitter.com", "Twitter"],
            [FaYoutube, "https://youtube.com", "YouTube"],
          ].map(([Icon, href, label]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="transition hover:opacity-70"
            >
              <Icon size={16} />
            </a>
          ))}{" "}
        </div>
      </div>

      
      <div className="mx-auto w-[81.39%]">
        <nav className="relative flex items-center justify-between rounded-sm bg-white py-[18px] pl-[53px] pr-[5px]">
          <ul className="flex items-center gap-10 text-base font-medium uppercase text-ink">
            {left.map((l, i) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className={
                    i === 0 ? "text-brand underline" : "hover:text-brand"
                  }
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#home"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="/images/logo.png"
              alt="Appolly"
              className="h-[90px] w-[200px] object-contain"
            />
          </a>

          <ul className="flex items-center gap-10 text-base font-medium uppercase text-ink">
            {right.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-brand">
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#download"
                className="rounded-sm bg-brand px-[27px] py-[9px] text-white outline-brand hover:bg-brand-dark"
              >
                Download
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
