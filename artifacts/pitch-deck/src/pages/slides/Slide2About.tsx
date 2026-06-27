export default function Slide2About() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#0f172a]">
      {/* Dot grid top-left */}
      <div
        className="absolute top-0 left-0 w-[30vw] h-[40vh] opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "3vw 3vw",
        }}
      />

      {/* Blue vertical accent strip */}
      <div className="absolute left-0 top-0 w-[0.6vw] h-full bg-[#2563eb]" />

      {/* Two-column layout */}
      <div className="absolute inset-0 flex items-center px-[8vw] gap-[8vw]">
        {/* Left — headline */}
        <div className="w-[42vw] flex flex-col">
          <span
            className="font-body font-semibold tracking-widest uppercase text-[#60a5fa] mb-[2vh]"
            style={{ fontSize: "2.2vw" }}
          >
            About
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight text-[#f1f5f9] mb-[3vh]"
            style={{ fontSize: "5.5vw", textWrap: "balance" }}
          >
            Building for the web, end to end.
          </h2>
          <div className="w-[6vw] h-[0.5vh] bg-[#2563eb]" />
        </div>

        {/* Right — bullets */}
        <div className="flex-1 flex flex-col gap-[3vh]">
          {/* Item 1 */}
          <div className="flex items-start gap-[1.5vw]">
            <div className="mt-[0.7vh] w-[0.8vw] h-[0.8vw] rounded-full bg-[#2563eb] flex-shrink-0" />
            <p className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>
              Student at a Cambodian university studying Computer Science
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-[1.5vw]">
            <div className="mt-[0.7vh] w-[0.8vw] h-[0.8vw] rounded-full bg-[#2563eb] flex-shrink-0" />
            <p className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>
              Builds with React, Laravel, and modern CSS frameworks
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-[1.5vw]">
            <div className="mt-[0.7vh] w-[0.8vw] h-[0.8vw] rounded-full bg-[#2563eb] flex-shrink-0" />
            <p className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>
              Certified in AWS Cloud and network security fundamentals
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-[1.5vw]">
            <div className="mt-[0.7vh] w-[0.8vw] h-[0.8vw] rounded-full bg-[#2563eb] flex-shrink-0" />
            <p className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>
              Focused on responsive design and real-world user flows
            </p>
          </div>
        </div>
      </div>

      {/* Slide number */}
      <div
        className="absolute bottom-[5vh] right-[5vw] text-[#94a3b8] font-body"
        style={{ fontSize: "2.2vw" }}
      >
        02 / 06
      </div>
    </div>
  );
}
