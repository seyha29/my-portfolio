export default function Slide4Projects() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#0f172a]">
      {/* Dot grid top-right */}
      <div
        className="absolute top-0 right-0 w-[30vw] h-[35vh] opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "3vw 3vw",
        }}
      />

      {/* Blue accent — left strip */}
      <div className="absolute left-0 top-0 w-[0.6vw] h-full bg-[#2563eb]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col px-[8vw] pt-[7vh] pb-[5vh]">
        {/* Header */}
        <div className="mb-[4vh]">
          <span
            className="font-body font-semibold tracking-widest uppercase text-[#60a5fa]"
            style={{ fontSize: "2.2vw" }}
          >
            Portfolio
          </span>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight text-[#f1f5f9] mt-[1vh]"
            style={{ fontSize: "5vw" }}
          >
            Featured Projects
          </h2>
          <div className="w-[5vw] h-[0.5vh] bg-[#2563eb] mt-[1.5vh]" />
        </div>

        {/* 2x2 Project grid */}
        <div className="grid grid-cols-2 gap-[2.5vw] flex-1">
          {/* Project 1 */}
          <div className="bg-[#1e293b] rounded-[0.8vw] p-[2.5vw] flex flex-col">
            <h3
              className="font-display font-bold text-[#f1f5f9] mb-[1vh]"
              style={{ fontSize: "3vw" }}
            >
              University IU CAM
            </h3>
            <p
              className="font-body text-[#94a3b8] flex-1"
              style={{ fontSize: "2.5vw", lineHeight: 1.5 }}
            >
              Responsive university website with React and CSS modules — modern UI components and smooth animations.
            </p>
            <div className="flex gap-[1vw] mt-[1.5vh]">
              <span
                className="bg-[#2563eb]/20 text-[#60a5fa] px-[1vw] py-[0.3vh] rounded font-body"
                style={{ fontSize: "2.2vw" }}
              >
                React
              </span>
              <span
                className="bg-[#2563eb]/20 text-[#60a5fa] px-[1vw] py-[0.3vh] rounded font-body"
                style={{ fontSize: "2.2vw" }}
              >
                CSS Modules
              </span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-[#1e293b] rounded-[0.8vw] p-[2.5vw] flex flex-col">
            <h3
              className="font-display font-bold text-[#f1f5f9] mb-[1vh]"
              style={{ fontSize: "3vw" }}
            >
              Portfolio Website
            </h3>
            <p
              className="font-body text-[#94a3b8] flex-1"
              style={{ fontSize: "2.5vw", lineHeight: 1.5 }}
            >
              Professional portfolio with responsive design and interactive elements — the project you're looking at right now.
            </p>
            <div className="flex gap-[1vw] mt-[1.5vh]">
              <span
                className="bg-[#2563eb]/20 text-[#60a5fa] px-[1vw] py-[0.3vh] rounded font-body"
                style={{ fontSize: "2.2vw" }}
              >
                React
              </span>
              <span
                className="bg-[#2563eb]/20 text-[#60a5fa] px-[1vw] py-[0.3vh] rounded font-body"
                style={{ fontSize: "2.2vw" }}
              >
                Responsive
              </span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-[#1e293b] rounded-[0.8vw] p-[2.5vw] flex flex-col">
            <h3
              className="font-display font-bold text-[#f1f5f9] mb-[1vh]"
              style={{ fontSize: "3vw" }}
            >
              Laravel E-Commerce
            </h3>
            <p
              className="font-body text-[#94a3b8] flex-1"
              style={{ fontSize: "2.5vw", lineHeight: 1.5 }}
            >
              Full-featured e-commerce platform with product management and payment processing built on Laravel.
            </p>
            <div className="flex gap-[1vw] mt-[1.5vh]">
              <span
                className="bg-[#2563eb]/20 text-[#60a5fa] px-[1vw] py-[0.3vh] rounded font-body"
                style={{ fontSize: "2.2vw" }}
              >
                Laravel
              </span>
              <span
                className="bg-[#2563eb]/20 text-[#60a5fa] px-[1vw] py-[0.3vh] rounded font-body"
                style={{ fontSize: "2.2vw" }}
              >
                MySQL
              </span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-[#1e293b] rounded-[0.8vw] p-[2.5vw] flex flex-col">
            <h3
              className="font-display font-bold text-[#f1f5f9] mb-[1vh]"
              style={{ fontSize: "3vw" }}
            >
              React E-Commerce Store
            </h3>
            <p
              className="font-body text-[#94a3b8] flex-1"
              style={{ fontSize: "2.5vw", lineHeight: 1.5 }}
            >
              Shopping cart with Stripe payments, Khmer/English translation, and downloadable receipts.
            </p>
            <div className="flex gap-[1vw] mt-[1.5vh]">
              <span
                className="bg-[#2563eb]/20 text-[#60a5fa] px-[1vw] py-[0.3vh] rounded font-body"
                style={{ fontSize: "2.2vw" }}
              >
                React
              </span>
              <span
                className="bg-[#2563eb]/20 text-[#60a5fa] px-[1vw] py-[0.3vh] rounded font-body"
                style={{ fontSize: "2.2vw" }}
              >
                Stripe
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide number */}
      <div
        className="absolute bottom-[5vh] right-[5vw] text-[#94a3b8] font-body"
        style={{ fontSize: "2.2vw" }}
      >
        04 / 06
      </div>
    </div>
  );
}
