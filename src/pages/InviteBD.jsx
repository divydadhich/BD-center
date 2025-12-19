import { useState } from "react";
import PageHeader from "../components/PageHeader";

const friendsData = [
  {
    name: "sumit",
    gender: "male",
    id: "1004215",
    avatar: "https://i.pravatar.cc/100?img=51",
  },
  {
    name: "🔥 i am VILLAIN 🔥",
    gender: "male",
    id: "1004286",
    avatar: "https://i.pravatar.cc/100?img=52",
  },
  {
    name: "tanu",
    gender: "female",
    id: "1009707",
    avatar: "https://i.pravatar.cc/100?img=53",
  },
  {
    name: "RANI",
    gender: "female",
    id: "1009845",
    avatar: "https://i.pravatar.cc/100?img=54",
  },
  {
    name: "⭐ twinkle ⭐ BUGGU",
    gender: "female",
    id: "2470440",
    avatar: "https://i.pravatar.cc/100?img=55",
  },
  {
    name: "sumit",
    gender: "male",
    id: "1004215",
    avatar: "https://i.pravatar.cc/100?img=51",
  },
  {
    name: "🔥 i am VILLAIN 🔥",
    gender: "male",
    id: "1004286",
    avatar: "https://i.pravatar.cc/100?img=52",
  },
  {
    name: "tanu",
    gender: "female",
    id: "1009707",
    avatar: "https://i.pravatar.cc/100?img=53",
  },
  {
    name: "RANI",
    gender: "female",
    id: "1009845",
    avatar: "https://i.pravatar.cc/100?img=54",
  },
  {
    name: "⭐ twinkle ⭐ BUGGU",
    gender: "female",
    id: "2470440",
    avatar: "https://i.pravatar.cc/100?img=55",
  },
  {
    name: "sumit",
    gender: "male",
    id: "1004215",
    avatar: "https://i.pravatar.cc/100?img=51",
  },
  {
    name: "🔥 i am VILLAIN 🔥",
    gender: "male",
    id: "1004286",
    avatar: "https://i.pravatar.cc/100?img=52",
  },
  {
    name: "tanu",
    gender: "female",
    id: "1009707",
    avatar: "https://i.pravatar.cc/100?img=53",
  },
  {
    name: "RANI",
    gender: "female",
    id: "1009845",
    avatar: "https://i.pravatar.cc/100?img=54",
  },
  {
    name: "⭐ twinkle ⭐ BUGGU",
    gender: "female",
    id: "2470440",
    avatar: "https://i.pravatar.cc/100?img=55",
  },
  {
    name: "sumit",
    gender: "male",
    id: "1004215",
    avatar: "https://i.pravatar.cc/100?img=51",
  },
  {
    name: "🔥 i am VILLAIN 🔥",
    gender: "male",
    id: "1004286",
    avatar: "https://i.pravatar.cc/100?img=52",
  },
  {
    name: "tanu",
    gender: "female",
    id: "1009707",
    avatar: "https://i.pravatar.cc/100?img=53",
  },
  {
    name: "RANI",
    gender: "female",
    id: "1009845",
    avatar: "https://i.pravatar.cc/100?img=54",
  },
  {
    name: "⭐ twinkle ⭐ BUGGU",
    gender: "female",
    id: "2470440",
    avatar: "https://i.pravatar.cc/100?img=55",
  },
   {
    name: "sumit",
    gender: "male",
    id: "1004215",
    avatar: "https://i.pravatar.cc/100?img=51",
  },
  {
    name: "🔥 i am VILLAIN 🔥",
    gender: "male",
    id: "1004286",
    avatar: "https://i.pravatar.cc/100?img=52",
  },
  {
    name: "tanu",
    gender: "female",
    id: "1009707",
    avatar: "https://i.pravatar.cc/100?img=53",
  },
  {
    name: "RANI",
    gender: "female",
    id: "1009845",
    avatar: "https://i.pravatar.cc/100?img=54",
  },
  {
    name: "⭐ twinkle ⭐ BUGGU",
    gender: "female",
    id: "2470440",
    avatar: "https://i.pravatar.cc/100?img=55",
  },
];

export default function InviteAgent() {
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  };

  const filtered = friendsData.filter(
    (f) =>
      f.name.toLowerCase().includes(query.toLowerCase()) ||
      f.id.includes(query)
  );

  return (
    <div className="relative max-w-[430px] mx-auto min-h-screen bg-gradient-to-b from-[#0f1235] to-[#1a1d4d] text-white">
      {/* HEADER */}
      <PageHeader title="Friends List" />

      {/* SEARCH */}
      <div className="px-4 mt-3">
        <div className="flex items-center bg-white/10 rounded-full px-4 h-11">
          <span className="text-white/40 mr-2">🔍</span>
          <input
            type="text"
            placeholder="Please search the user name or ID"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-sm placeholder-white/40"
          />
        </div>
      </div>

      {/* LIST */}
      <div className="px-4 mt-4 space-y-4">
        {filtered.map((f, i) => (
          <div
            key={i}
            onClick={() => showToast("bd invite exists")}
            className="flex items-center justify-between cursor-pointer active:scale-[0.98] transition"
          >
            <div className="flex items-center gap-3">
              <img
                src={f.avatar}
                alt={f.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{f.name}</span>
                  <span>
                    {f.gender === "male" ? "♂️" : "♀️"}
                  </span>
                </div>
                <p className="text-sm text-white/60">
                  ID:{f.id}
                </p>
              </div>
            </div>

            <span className="text-white/40 text-xl">›</span>
          </div>
        ))}
      </div>

      {/* TOAST POPUP */}
      {toast && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-black/80 text-white px-6 py-3 rounded-xl text-sm animate-toast">
            {toast}
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        .animate-toast {
          animation: toastFade 2s ease forwards;
        }

        @keyframes toastFade {
          0% { opacity: 0; transform: scale(0.95); }
          15% { opacity: 1; transform: scale(1); }
          85% { opacity: 1; }
          100% { opacity: 0; transform: scale(0.95); }
        }
      `}</style>
    </div>
  );
}
