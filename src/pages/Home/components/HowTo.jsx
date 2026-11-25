import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import useStage from "../../../hooks/useStage";

const HH = 1663; 

const para =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";

const cardText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.";

const team = [
  { name: "Carla Press", role: "App developer", img: "team-carla.png", active: true },
  { name: "Craig Gouse", role: "UI/UX designer", img: "team-craig.png" },
  { name: "Jocelyn Septimus", role: "Website developer", img: "team-jocelyn.png" },
];

const socials = [
  { Icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

function Card({ name, role, img, active }) {
  return (
    <div className="flex h-[580px] w-[370px] flex-col items-center rounded-sm bg-white pt-[29px] shadow-[0_0_24px_rgba(35,34,51,0.1)]">
      
      <div className="relative h-[220px] w-[220px]">
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
          className="absolute left-[10px] top-[10px] h-[200px] w-[200px] rounded-full object-cover"
        />
      </div>

      <h4 className="mt-[57px] text-[31.25px] font-semibold uppercase leading-[47px] text-ink">{name}</h4>
      <p className="mt-[2px] text-[20px] font-medium uppercase leading-[30px] text-body">{role}</p>
      <p className="mt-4 w-[306px] text-center text-base leading-6 text-body">{cardText}</p>

      <div className="mt-[33px] flex">
        {socials.map(({ Icon, href, label }, i) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={`flex h-[19px] w-[86px] items-center justify-center transition hover:text-brand ${
              i > 0 ? "border-l border-[#d9d9e0]" : ""
            } ${active && i === 0 ? "text-ink" : "text-ink"}`}
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function HowTo() {
  const { s, stageW } = useStage();

  return (
    <section id="how-to" className="relative w-full overflow-hidden bg-white" style={{ height: HH * s }}>
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: stageW, height: HH, transform: `scale(${s})` }}
      >
        <div
          className="absolute left-0 top-0 w-full bg-brand"
          style={{ height: 477, backgroundImage: "url('/images/howto-bg.png')", backgroundSize: "100% 100%" }}
        />

        <h2 className="absolute inset-x-0 top-[117px] text-center text-[31.25px] font-bold uppercase leading-[47px] text-white">
          How to use the app perfectly
        </h2>
        <p className="absolute left-1/2 top-[185px] w-[593px] -translate-x-1/2 text-center text-base leading-6 text-white">
          {para}
        </p>

        <img
          src="/images/howto-video.png"
          alt="How to use the app"
          className="absolute left-1/2 max-w-none -translate-x-1/2"
          style={{ top: 230, width: 971 }}
        />

        <h2 className="absolute inset-x-0 top-[757px] text-center text-[31.25px] font-bold uppercase leading-[47px] text-ink">
          Our reative team
        </h2>
        <p className="absolute left-1/2 top-[833px] w-[593px] -translate-x-1/2 text-center text-base leading-6 text-body">
          {para}
        </p>

        <div className="absolute flex justify-between" style={{ left: "9.306%", width: "81.39%", top: 962 }}>
          {team.map((m) => (
            <Card key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}