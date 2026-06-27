export default function Slide6Contact() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#0f172a]">
      {/* Blue gradient backdrop — right side */}
      <div
        className="absolute top-0 right-0 w-[50vw] h-full"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #2563eb 100%)",
          opacity: 0.35,
        }}
      />

      {/* Dot grid — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[50vh] opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "3vw 3vw",
        }}
      />

      {/* Accent bar — top */}
      <div className="absolute top-0 left-0 w-full h-[0.6vh] bg-[#2563eb]" />

      {/* Content — centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[8vw]">
        {/* Section label */}
        <span
          className="font-body font-semibold tracking-widest uppercase text-[#60a5fa] mb-[3vh]"
          style={{ fontSize: "2.2vw" }}
        >
          Get in Touch
        </span>

        {/* Name */}
        <h2
          className="font-display font-extrabold leading-none tracking-tight text-[#f1f5f9] mb-[1.5vh]"
          style={{ fontSize: "7vw" }}
        >
          Than Seyha
        </h2>

        {/* Accent line */}
        <div className="w-[8vw] h-[0.6vh] bg-[#2563eb] mb-[4vh]" />

        {/* Portfolio link */}
        <a
          href="https://seyha29-my-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[#60a5fa] underline mb-[2vh]"
          style={{ fontSize: "3.2vw" }}
        >
          seyha29-my-portfolio.vercel.app
        </a>

        {/* GitHub link */}
        <a
          href="https://github.com/seyha29"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[#94a3b8] underline mb-[6vh]"
          style={{ fontSize: "3vw" }}
        >
          github.com/seyha29
        </a>

        {/* Tagline */}
        <p
          className="font-body text-[#94a3b8] max-w-[50vw]"
          style={{ fontSize: "3vw", lineHeight: 1.6 }}
        >
          Open to internships, freelance projects, and full-time opportunities.
        </p>
      </div>

      {/* Slide number */}
      <div
        className="absolute bottom-[5vh] right-[5vw] text-[#94a3b8] font-body"
        style={{ fontSize: "2.2vw" }}
      >
        06 / 06
      </div>
    </div>
  );
}
