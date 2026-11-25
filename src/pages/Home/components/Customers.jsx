import useStage from "../../../hooks/useStage";

const CH = 873; 

const para =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.";

function CardBody({ name, role, avatar, padX }) {
  return (
    <div className="relative h-full text-center" style={{ paddingLeft: padX, paddingRight: padX }}>
      {avatar && (
        <img
          src={avatar}
          alt={name}
          className="absolute left-1/2 top-[40px] h-[96px] w-[96px] -translate-x-1/2 rounded-full object-cover"
        />
      )}
      <h4 className="absolute inset-x-0 top-[151px] text-[31.25px] font-semibold uppercase leading-[47px] text-ink">
        {name}
      </h4>
      <p className="absolute inset-x-0 top-[202px] text-[20px] font-medium uppercase leading-[30px] text-ink">
        {role}
      </p>
      <p className="absolute top-[241px] text-base leading-6 text-body" style={{ left: padX, right: padX }}>
        {para}
      </p>
    </div>
  );
}

export default function Customers() {
  const { s, stageW } = useStage();

  return (
    <section
      id="customers"
      className="relative w-full overflow-hidden bg-brand"
      style={{
        height: CH * s,
        backgroundImage: "url('/images/customers-bg.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: stageW, height: CH, transform: `scale(${s})` }}
      >
        <h2 className="absolute inset-x-0 top-[117px] text-center text-[31.25px] font-bold uppercase leading-[47px] text-white">
          Our happy customers
        </h2>
        <p className="absolute left-1/2 top-[185px] w-[593px] -translate-x-1/2 text-center text-base leading-6 text-white">
          {para}
        </p>

        
        <div
          className="absolute h-[328px] w-[573px] overflow-hidden rounded-sm bg-white"
          style={{ left: "9.306%", top: 335 }}
        >
          <CardBody name="Amy Wilson" role="Designer" padX={38} />
        </div>

        
        <div
          className="absolute h-[328px] w-[573px] overflow-hidden rounded-sm bg-white"
          style={{ right: "9.306%", top: 335 }}
        >
          <CardBody name="Jon Martin" role="Developer" padX={38} />
        </div>

        
        <div
          className="absolute left-1/2 h-[355px] w-[767px] -translate-x-1/2 rounded-sm bg-white shadow-[0_12px_40px_rgba(35,34,51,0.2)]"
          style={{ top: 320 }}
        >
          <CardBody name="Ann Lubin" role="Co-founder" avatar="/images/customer-ann.png" padX={67} />
        </div>

        
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-5" style={{ top: 740 }}>
          <span className="h-[14px] w-[14px] rounded-full bg-white ring-[5px] ring-white/30" />
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="h-[14px] w-[14px] rounded-full bg-white" />
          ))}
        </div>
      </div>
    </section>
  );
}