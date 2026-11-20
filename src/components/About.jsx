import { FaCheckCircle } from "react-icons/fa";
import useStage from "../useStage";

const AH = 1014; // About section height in Figma px

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.";

const features = [
  { title: "Creative design", text },
  { title: "Easy to use", text },
  { title: "Best user experince", text }, // spelled like the Figma design
];

export default function About() {
  const { s, stageW } = useStage();

  return (
    <section id="about" className="relative w-full overflow-hidden bg-white" style={{ height: AH * s }}>
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: stageW, height: AH, transform: `scale(${s})` }}
      >
        <h2 className="absolute inset-x-0 top-[117px] text-center text-[31.25px] font-bold uppercase leading-[47px] text-ink">
          About our app
        </h2>
        <p className="absolute left-1/2 top-[185px] w-[593px] -translate-x-1/2 text-center text-base leading-6 text-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit
          vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt
          rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
        </p>

        {/* Phones image, left edge lines up with the navbar */}
        <img
          src="/images/about-phones.png"
          alt="App screens"
          className="absolute max-w-none"
          style={{ left: "calc(9.306% + 35px)", top: 323, width: 370 }}
        />

        {/* Feature cards, right edge lines up with the navbar */}
        <div className="absolute flex flex-col gap-10" style={{ right: "9.306%", top: 317, width: 569 }}>
          {features.map((f) => (
            <div
              key={f.title}
              className="relative h-[159px] rounded-sm bg-white pl-[60px] pr-6 pt-[27px] shadow-[0_0_24px_rgba(35,34,51,0.1)]"
            >
              <FaCheckCircle className="absolute left-5 top-[32px] text-brand" size={20} />
              <h4 className="text-[20px] font-semibold uppercase leading-[30px] text-ink">{f.title}</h4>
              <p className="mt-[14px] text-base leading-6 text-body">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}