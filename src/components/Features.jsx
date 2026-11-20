import useStage from "../useStage";

const FH = 1710; // section height in Figma px

const intro =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";

const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const ALIGN = {
  left: "items-start text-left",
  right: "items-end text-right",
  center: "items-center text-center",
};

function Feature({ icon, h, title, align, style }) {
  return (
    <div className={`absolute flex w-max flex-col ${ALIGN[align]}`} style={style}>
      <div className="flex h-[56px] items-center">
        <img src={`/images/icons/${icon}`} alt="" style={{ height: h }} className="w-auto" />
      </div>
      <h3 className="mt-[21px] whitespace-nowrap text-[20px] font-semibold uppercase leading-[30px] text-white">
        {title}
      </h3>
      <p className="mt-6 w-[300px] text-base leading-6 text-white">{short}</p>
    </div>
  );
}

export default function Features() {
  const { s, stageW } = useStage();

  return (
    <section
      id="features"
      className="relative w-full overflow-hidden bg-brand"
      style={{
        height: FH * s,
        backgroundImage: "url('/images/features-bg.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: stageW, height: FH, transform: `scale(${s})` }}
      >
        <h2 className="absolute inset-x-0 top-[117px] text-center text-[31.25px] font-bold uppercase leading-[47px] text-white">
          App features
        </h2>
        <p className="absolute left-1/2 top-[185px] w-[593px] -translate-x-1/2 text-center text-base leading-6 text-white">
          {intro}
        </p>

        {/* Phone (image includes its shadow, so it is larger than the phone itself) */}
        <img
          src="/images/app-phone.png"
          alt="App screen"
          className="absolute max-w-none"
          style={{ left: "calc(50% - 247px)", top: 446, width: 575 }}
        />

        <Feature icon="comment.png" h={40} title="Full free chat" align="center"
          style={{ left: "50%", top: 311, transform: "translateX(-50%)" }} />

        <Feature icon="browser.png" h={51} title="Unlimiter features" align="right"
          style={{ right: "calc(50% + 248px)", top: 602 }} />
        <Feature icon="cell-phone.png" h={51} title="Iso & android version" align="left"
          style={{ left: "calc(50% + 247px)", top: 605 }} />

        <Feature icon="vector.png" h={51} title="Awsome ui design" align="right"
          style={{ right: "calc(50% + 248px)", top: 1117 }} />
        <Feature icon="eye-scanner.png" h={54} title="Retina ready greaphics" align="left"
          style={{ left: "calc(50% + 247px)", top: 1118 }} />

        <Feature icon="male-telemarketer.png" h={51} title="24/7 support by real pepole" align="center"
          style={{ left: "50%", top: 1412, transform: "translateX(-50%)" }} />
      </div>
    </section>
  );
}