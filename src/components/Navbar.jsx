import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const left = [["Home", "/#home"], ["About", "/#about"], ["Features", "/#features"]];
const right = [["Screenshot", "/#screenshot"], ["Blog", "/blog"]];

const socials = [
  [FaFacebookF, "https://facebook.com", "Facebook"],
  [FaInstagram, "https://instagram.com", "Instagram"],
  [FaTwitter, "https://twitter.com", "Twitter"],
  [FaYoutube, "https://youtube.com", "YouTube"],
];

export default function Navbar({ active = "Home" }) {
  const cls = (label) => (active === label ? "text-brand underline" : "hover:text-brand");

  return (
    <header className="absolute inset-x-0 top-0 z-20 text-white">
      <div className="mx-auto flex w-[81.39%] items-center justify-between pb-[19px] pt-[35px] text-sm">
        <div className="flex items-center gap-8">
          <a href="mailto:Info@youremail.com" className="flex items-center gap-2 hover:opacity-80">
            <Mail size={16} /> Info@youremail.com
          </a>
          <a href="tel:+14805550103" className="flex items-center gap-2 hover:opacity-80">
            <Phone size={16} /> (480) 555-0103
          </a>
        </div>
        <div className="flex items-center gap-5">
          {socials.map(([Icon, href, label]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="transition hover:opacity-70">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto w-[81.39%]">
        <nav className="relative flex items-center justify-between rounded-sm bg-white py-[18px] pl-[53px] pr-[5px]">
          <ul className="flex items-center gap-10 text-base font-medium uppercase text-ink">
            {left.map(([label, href]) => (
              <li key={label}><a href={href} className={cls(label)}>{label}</a></li>
            ))}
          </ul>

          <a href="/#home" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="/images/logo.png" alt="Appolly" className="h-[125px] w-[215px] object-fill" />
          </a>

          <ul className="flex items-center gap-10 text-base font-medium uppercase text-ink">
            {right.map(([label, href]) => (
              <li key={label}><a href={href} className={cls(label)}>{label}</a></li>
            ))}
            <li>
              <a
                href="/#screenshot"
                className="inline-flex h-[50px] w-[158px] shrink-0 items-center justify-center rounded-[5px] border-2 border-white bg-brand text-white outline-brand hover:bg-brand-dark"
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
