export function FractalFlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="noise-overlay" />

      <div className="fractal-grid" />

      <div className="absolute left-[-8rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full bg-[rgba(123,215,200,0.24)] blur-3xl float-slow pulse-glow" />
      <div className="absolute right-[-7rem] top-[4rem] h-[24rem] w-[24rem] rounded-full bg-[rgba(123,189,215,0.18)] blur-3xl float-reverse pulse-glow" />
      <div className="absolute bottom-[-8rem] left-[18%] h-[28rem] w-[28rem] rounded-full bg-[rgba(139,232,217,0.18)] blur-3xl float-slower" />
      <div className="absolute bottom-[8%] right-[10%] h-[18rem] w-[18rem] rounded-full bg-[rgba(90,168,184,0.16)] blur-3xl float-slow" />

      <div className="ring-pattern left-[8%] top-[7rem] h-[16rem] w-[16rem]" />
      <div className="ring-pattern left-[4%] top-[3rem] h-[24rem] w-[24rem]" />
      <div className="ring-pattern right-[8%] top-[18rem] h-[14rem] w-[14rem]" />
      <div className="ring-pattern right-[3%] top-[13rem] h-[22rem] w-[22rem]" />
      <div className="ring-pattern left-[24%] bottom-[7%] h-[18rem] w-[18rem]" />
      <div className="ring-pattern left-[20%] bottom-[2%] h-[26rem] w-[26rem]" />

      <div className="flow-line left-[10%] top-[24%] h-[22rem] w-[40rem] rotate-[12deg]" />
      <div className="flow-line right-[0%] top-[38%] h-[20rem] w-[34rem] rotate-[-18deg]" />
      <div className="flow-line left-[18%] bottom-[12%] h-[16rem] w-[28rem] rotate-[6deg]" />
    </div>
  );
}
