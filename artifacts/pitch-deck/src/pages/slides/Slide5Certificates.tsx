export default function Slide5Certificates() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#0f172a]">
      {/* Dot grid top-left */}
      <div
        className="absolute top-0 left-0 w-[35vw] h-[45vh] opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "3vw 3vw",
        }}
      />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-[0.6vh] bg-[#2563eb]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[8vw]">
        {/* Header */}
        <div className="text-center mb-[6vh]">
          <span
            className="font-body font-semibold tracking-widest uppercase text-[#60a5fa]"
            style={{ fontSize: "2.2vw" }}
          >
            Credentials
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight text-[#f1f5f9] mt-[1vh]"
            style={{ fontSize: "5vw" }}
          >
            Certificates
          </h2>
          <div className="w-[5vw] h-[0.5vh] bg-[#2563eb] mt-[1.5vh] mx-auto" />
        </div>

        {/* Two certificate cards side by side */}
        <div className="flex gap-[4vw] w-full">
          {/* AWS */}
          <div className="flex-1 bg-[#1e293b] rounded-[1vw] p-[3vw] flex flex-col">
            {/* Issuer badge */}
            <div
              className="bg-[#2563eb] text-white font-body font-semibold rounded-[0.4vw] px-[1.5vw] py-[0.8vh] self-start mb-[2.5vh]"
              style={{ fontSize: "2.4vw" }}
            >
              Amazon Web Services
            </div>
            <h3
              className="font-display font-bold text-[#f1f5f9] mb-[2vh] leading-tight"
              style={{ fontSize: "3vw" }}
            >
              AWS Academy Cloud Foundations
            </h3>
            <p
              className="font-body text-[#94a3b8] mb-[3vh]"
              style={{ fontSize: "2.8vw" }}
            >
              Cloud Computing · AWS Services · Security Fundamentals
            </p>
            <div
              className="font-body text-[#60a5fa] mt-auto"
              style={{ fontSize: "2.4vw" }}
            >
              April 27, 2025
            </div>
          </div>

          {/* Fortinet */}
          <div className="flex-1 bg-[#1e293b] rounded-[1vw] p-[3vw] flex flex-col">
            {/* Issuer badge */}
            <div
              className="bg-[#c0392b] text-white font-body font-semibold rounded-[0.4vw] px-[1.5vw] py-[0.8vh] self-start mb-[2.5vh]"
              style={{ fontSize: "2.4vw" }}
            >
              Fortinet
            </div>
            <h3
              className="font-display font-bold text-[#f1f5f9] mb-[2vh] leading-tight"
              style={{ fontSize: "3vw" }}
            >
              Network Security Associate
            </h3>
            <p
              className="font-body text-[#94a3b8] mb-[3vh]"
              style={{ fontSize: "2.8vw" }}
            >
              Network Security · Firewalls · Threat Protection
            </p>
            <div
              className="font-body text-[#60a5fa] mt-auto"
              style={{ fontSize: "2.4vw" }}
            >
              June 15, 2025
            </div>
          </div>
        </div>
      </div>

      {/* Slide number */}
      <div
        className="absolute bottom-[5vh] right-[5vw] text-[#94a3b8] font-body"
        style={{ fontSize: "2.2vw" }}
      >
        05 / 06
      </div>
    </div>
  );
}
