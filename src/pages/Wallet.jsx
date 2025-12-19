import PageHeader from "../components/PageHeader";

export default function Wallet() {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-100">

      {/* HEADER */}
      <PageHeader title="Wallet" />

      {/* WALLET CARD */}
      <div className="px-4 mt-4">
        <div className="relative h-44 rounded-2xl overflow-hidden text-white shadow-lg">

          {/* Purple background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500" />

          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-15 text-5xl font-bold tracking-widest">
            <div className="absolute top-6 left-4">$ B $</div>
            <div className="absolute top-20 left-20">$ B</div>
            <div className="absolute top-10 right-6">B $</div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 p-5 flex justify-between">
            <div>
              <p className="text-sm opacity-90">Amount</p>
              <h1 className="text-4xl font-bold mt-2">$ 0</h1>
            </div>

            <button className="text-sm font-medium opacity-90">
              Details
            </button>
          </div>

          {/* CLOUDS */}
          <div className="absolute bottom-0 left-0 w-full h-16">
            <Clouds />
          </div>
        </div>
      </div>

      {/* EMPTY SPACE / CONTENT AREA */}
      <div className="mt-10 px-4 text-center text-gray-500 text-sm">
        No transactions available
      </div>
    </div>
  );
}

/* ================= CLOUD SVG ================= */

const Clouds = () => (
  <svg
    viewBox="0 0 375 80"
    preserveAspectRatio="none"
    className="w-full h-full"
  >
    <path
      d="M0,40 
         C40,10 80,10 120,40 
         C160,70 200,70 240,40 
         C280,10 320,10 375,40 
         L375,80 L0,80 Z"
      fill="#eef2ff"
    />
  </svg>
);
