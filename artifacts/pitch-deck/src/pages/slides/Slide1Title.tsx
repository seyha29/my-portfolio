export default function Slide1Title() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#0f172a]">
      {/* Subtle dot grid background top-right */}
      <div
        className="absolute top-0 right-0 w-[40vw] h-[60vh] opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "3vw 3vw",
        }}
      />

      {/* Blue gradient blob bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[50vw] h-[50vh] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, #2563eb 0%, transparent 70%)",
        }}
      />

      {/* Content — left-aligned */}
      <div className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        {/* Role label */}
        <div className="flex items-center gap-[1.5vw] mb-[3vh]">
          <div className="w-[3vw] h-[0.3vh] bg-[#2563eb]" />
          <span
            className="font-body font-semibold tracking-widest uppercase text-[#60a5fa]"
            style={{ fontSize: "2.2vw" }}
          >
            Full-Stack Developer
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display font-extrabold leading-none tracking-tight text-[#f1f5f9] mb-[2vh]"
          style={{ fontSize: "9vw", textWrap: "balance" }}
        >
          Than Seyha
        </h1>

        {/* Accent line */}
        <div className="w-[12vw] h-[0.7vh] bg-[#2563eb] mb-[4vh]" />

        {/* Tagline */}
        <p
          className="font-body text-[#94a3b8] max-w-[40vw]"
          style={{ fontSize: "3vw", lineHeight: 1.5 }}
        >
          Building responsive web applications from front to back.
        </p>

        {/* Portfolio link */}
        <p
          className="font-body text-[#60a5fa] mt-[4vh]"
          style={{ fontSize: "2.4vw" }}
        >
          seyha29-my-portfolio.vercel.app
        </p>
      </div>

      {/* Slide number badge */}
      <div
        className="absolute bottom-[5vh] right-[5vw] text-[#94a3b8] font-body"
        style={{ fontSize: "2.2vw" }}
      >
        01 / 06
      </div>
    </div>
  );
}
