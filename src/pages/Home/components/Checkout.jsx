import {
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaThumbsUp,
  FaStar,
} from "react-icons/fa";
import useStage from "../../../hooks/useStage";
import StoreBadges from "../../../components/StoreBadges";

const stats = [
  { icon: FaDownload, value: "59865", label: "Download" },
  { icon: FaThumbsUp, value: "29852", label: "Like" },
  { icon: FaStar, value: "1500", label: "5 Star rating" },
];

const CH = 1794; 

const para =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";

export default function Checkout() {
  const { s, stageW } = useStage();

  return (
    <section
      id="screenshot"
      className="relative w-full overflow-hidden bg-white"
      style={{ height: CH * s }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: stageW, height: CH, transform: `scale(${s})` }}
      >
        
        <h2 className="absolute inset-x-0 top-[117px] text-center text-[31.25px] font-bold uppercase leading-[47px] text-ink">
          Checkout our app interface look
        </h2>
        <p className="absolute left-1/2 top-[185px] w-[593px] -translate-x-1/2 text-center text-base leading-6 text-body">
          {para}
        </p>

        
        <img
          src="/images/checkout-slider.png"
          alt="App screens"
          className="absolute left-1/2 max-w-none -translate-x-1/2"
          style={{ top: 322, width: 1086 }}
        />

        
        <button
          className="absolute flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-brand text-brand"
          style={{ left: "calc(50% - 644px)", top: 610 }}
          aria-label="Previous"
        >
          <FaChevronLeft size={22} />
        </button>
        <button
          className="absolute flex h-[80px] w-[80px] items-center justify-center rounded-full bg-brand text-white"
          style={{ left: "calc(50% + 564px)", top: 610 }}
          aria-label="Next"
        >
          <FaChevronRight size={22} />
        </button>

        
        <div
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-5"
          style={{ top: 987 }}
        >
          <span className="h-[14px] w-[14px] rounded-full bg-brand ring-[5px] ring-brand/20" />
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="h-[14px] w-[14px] rounded-full bg-brand" />
          ))}
        </div>

        
        <h3
          className="absolute text-[31.25px] font-semibold uppercase leading-[47px] text-ink"
          style={{ left: "9.306%", top: 1137 }}
        >
          Download app now
        </h3>
        <p
          className="absolute w-[580px] text-base leading-6 text-body"
          style={{ left: "9.306%", top: 1189 }}
        >
          {para}
        </p>
        <div className="absolute" style={{ left: "9.306%", top: 1319 }}>
          <StoreBadges height={45} gap={28} />
        </div>
        <div
          className="absolute flex gap-[30px]"
          style={{ left: "9.306%", top: 1423 }}
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <a
              key={label}
              href="#download"
              className="flex h-[178px] w-[172px] flex-col items-center rounded-sm bg-brand pt-[30px] text-white shadow-[0_8px_24px_rgba(89,86,233,0.25)] transition hover:-translate-y-1 hover:bg-brand-dark"
            >
              <Icon size={32} />
              <span className="mt-[13px] text-[25px] font-semibold leading-[37.5px]">
                {value}
              </span>
              <span className="mt-[11px] whitespace-nowrap text-[20px] font-medium uppercase leading-[30px]">
                {label}
              </span>
            </a>
          ))}
        </div>

        
        <img
          src="/images/download-phones.png"
          alt="App on two phones"
          className="absolute max-w-none"
          style={{ right: "calc(9.306% - 8px)", top: 1125, width: 540 }}
        />
      </div>
    </section>
  );
}
