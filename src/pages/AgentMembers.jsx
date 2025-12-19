import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const agentMembers = [
  {
    name: "꧁Deep꧂",
    avatar: "https://i.pravatar.cc/100?img=11",
    id: "1007681",
    host: 1,
    coins: "0",
    total: "0$",
    month: "2025-12",
  },
  {
    name: "✝Ghwāhi",
    avatar: "https://i.pravatar.cc/100?img=12",
    id: "2474047",
    host: 17,
    coins: "3.25M",
    total: "375$",
    month: "2025-12",
  },
  {
    name: "💞 Aryan 💞",
    avatar: "https://i.pravatar.cc/100?img=13",
    id: "2641934",
    host: 1,
    coins: "0",
    total: "0$",
    month: "2025-12",
  },
  {
    name: "fake love 👁️",
    avatar: "https://i.pravatar.cc/100?img=14",
    id: "2470440",
    host: 1,
    coins: "0",
    total: "0$",
    month: "2025-12",
  },
  {
    name: "MAHIRU",
    avatar: "https://i.pravatar.cc/100?img=15",
    id: "2482728",
    host: 1,
    coins: "0",
    total: "0$",
    month: "2025-12",
  },
];

export default function AgentMembers() {
  const { agentId } = useParams();

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-100">
      {/* HEADER */}
      <PageHeader title="Agent Members" />

      {/* SEARCH */}
      <div className="px-4 mt-4">
        <div className="flex items-center bg-white rounded-full px-4 h-11 shadow-sm">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            placeholder="Please enter an account"
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* LIST */}
      <div className="p-4 space-y-4">
        {agentMembers.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              {/* AVATAR */}
              <img
                src={m.avatar}
                alt={m.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              {/* INFO */}
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{m.name}</p>
                <p className="text-sm text-gray-400">ID: {m.id}</p>
              </div>

              {/* RIGHT BADGES */}
              <div className="flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full border border-purple-500 text-purple-500 text-sm">
                    Host: {m.host}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-orange-400 text-orange-500 text-sm">
                    🪙 {m.coins}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full border border-orange-400 text-orange-500 text-sm">
                    Total: {m.total}
                  </span>
                  <span className="text-sm text-gray-400">{m.month}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
