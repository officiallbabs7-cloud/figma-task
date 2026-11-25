import StoreBadges from "../../../components/StoreBadges";

export default function Hero() {
  return (
    <div className="absolute inset-0">
      
      <div
        className="absolute border-[18px] border-brand-light/60"
        style={{ left: "calc(9.306% + 49px)", top: 323, width: 570, height: 532 }}
      />

      <div
        className="absolute bg-white"
        style={{ left: "9.306%", top: 372, width: 570, height: 432, padding: "40px 20px 0 30px" }}
      >
        <h1 className="text-[48.83px] font-bold uppercase leading-[1.3] text-brand">
          A great app makes your life better
        </h1>
        <p className="mt-4 max-w-[487px] text-base leading-6 text-body">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>
        <h3 className="mt-8 text-[25px] font-semibold uppercase leading-[1.5] text-ink">
          Download app now
        </h3>
        <StoreBadges height={44} gap={16} className="mt-2" />
      </div>

      <img
        src="/images/hero-phone.png"
        alt="App preview"
        className="absolute max-w-none"
        style={{ right: "calc(9.306% - 134px)", top: 215, width: 561 }}
      />
    </div>
  );
}