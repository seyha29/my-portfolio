export default function Slide3Skills() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#0f172a]">
      {/* Dot grid — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[35vw] h-[45vh] opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "3vw 3vw",
        }}
      />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-[0.6vh] bg-[#2563eb]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col px-[8vw] pt-[8vh] pb-[6vh]">
        {/* Header */}
        <div className="mb-[4vh]">
          <span
            className="font-body font-semibold tracking-widest uppercase text-[#60a5fa]"
            style={{ fontSize: "2.2vw" }}
          >
            Technical Skills
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight text-[#f1f5f9] mt-[1vh]"
            style={{ fontSize: "5vw" }}
          >
            The Stack
          </h2>
          <div className="w-[5vw] h-[0.5vh] bg-[#2563eb] mt-[1.5vh]" />
        </div>

        {/* Two columns: Frontend + Backend */}
        <div className="flex gap-[6vw] flex-1">
          {/* Frontend */}
          <div className="flex-1 flex flex-col gap-[2.2vh]">
            <p
              className="font-body font-semibold text-[#60a5fa] uppercase tracking-widest"
              style={{ fontSize: "2.4vw" }}
            >
              Frontend
            </p>

            {/* HTML */}
            <div>
              <div className="flex justify-between mb-[0.5vh]">
                <span className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>HTML</span>
                <span className="font-body text-[#60a5fa] font-semibold" style={{ fontSize: "3vw" }}>95%</span>
              </div>
              <div className="w-full h-[0.8vh] bg-[#1e293b] rounded-full">
                <div className="h-full rounded-full bg-[#2563eb]" style={{ width: "95%" }} />
              </div>
            </div>

            {/* CSS */}
            <div>
              <div className="flex justify-between mb-[0.5vh]">
                <span className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>CSS</span>
                <span className="font-body text-[#60a5fa] font-semibold" style={{ fontSize: "3vw" }}>90%</span>
              </div>
              <div className="w-full h-[0.8vh] bg-[#1e293b] rounded-full">
                <div className="h-full rounded-full bg-[#2563eb]" style={{ width: "90%" }} />
              </div>
            </div>

            {/* JavaScript */}
            <div>
              <div className="flex justify-between mb-[0.5vh]">
                <span className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>JavaScript</span>
                <span className="font-body text-[#60a5fa] font-semibold" style={{ fontSize: "3vw" }}>85%</span>
              </div>
              <div className="w-full h-[0.8vh] bg-[#1e293b] rounded-full">
                <div className="h-full rounded-full bg-[#2563eb]" style={{ width: "85%" }} />
              </div>
            </div>

            {/* Bootstrap */}
            <div>
              <div className="flex justify-between mb-[0.5vh]">
                <span className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>Bootstrap</span>
                <span className="font-body text-[#60a5fa] font-semibold" style={{ fontSize: "3vw" }}>88%</span>
              </div>
              <div className="w-full h-[0.8vh] bg-[#1e293b] rounded-full">
                <div className="h-full rounded-full bg-[#2563eb]" style={{ width: "88%" }} />
              </div>
            </div>
          </div>

          {/* Backend / Frameworks */}
          <div className="flex-1 flex flex-col gap-[2.2vh]">
            <p
              className="font-body font-semibold text-[#60a5fa] uppercase tracking-widest"
              style={{ fontSize: "2.4vw" }}
            >
              Frameworks
            </p>

            {/* Tailwind */}
            <div>
              <div className="flex justify-between mb-[0.5vh]">
                <span className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>Tailwind CSS</span>
                <span className="font-body text-[#60a5fa] font-semibold" style={{ fontSize: "3vw" }}>82%</span>
              </div>
              <div className="w-full h-[0.8vh] bg-[#1e293b] rounded-full">
                <div className="h-full rounded-full bg-[#2563eb]" style={{ width: "82%" }} />
              </div>
            </div>

            {/* React JS */}
            <div>
              <div className="flex justify-between mb-[0.5vh]">
                <span className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>React JS</span>
                <span className="font-body text-[#60a5fa] font-semibold" style={{ fontSize: "3vw" }}>80%</span>
              </div>
              <div className="w-full h-[0.8vh] bg-[#1e293b] rounded-full">
                <div className="h-full rounded-full bg-[#2563eb]" style={{ width: "80%" }} />
              </div>
            </div>

            {/* PHP */}
            <div>
              <div className="flex justify-between mb-[0.5vh]">
                <span className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>PHP</span>
                <span className="font-body text-[#60a5fa] font-semibold" style={{ fontSize: "3vw" }}>75%</span>
              </div>
              <div className="w-full h-[0.8vh] bg-[#1e293b] rounded-full">
                <div className="h-full rounded-full bg-[#2563eb]" style={{ width: "75%" }} />
              </div>
            </div>

            {/* Laravel */}
            <div>
              <div className="flex justify-between mb-[0.5vh]">
                <span className="font-body text-[#f1f5f9]" style={{ fontSize: "3vw" }}>Laravel</span>
                <span className="font-body text-[#60a5fa] font-semibold" style={{ fontSize: "3vw" }}>70%</span>
              </div>
              <div className="w-full h-[0.8vh] bg-[#1e293b] rounded-full">
                <div className="h-full rounded-full bg-[#2563eb]" style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide number */}
      <div
        className="absolute bottom-[5vh] right-[5vw] text-[#94a3b8] font-body"
        style={{ fontSize: "2.2vw" }}
      >
        03 / 06
      </div>
    </div>
  );
}
