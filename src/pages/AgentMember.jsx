import { useNavigate } from "react-router-dom";
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
];

export default function AgentMember() {
  const navigate = useNavigate();

  const goToMetric = (agentId, type) => {
    navigate(`/agent-members/${agentId}/${type}`);
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-100">
      <PageHeader title="Agent List" />

      <div className="p-4 space-y-4">
        {agentMembers.map((m) => (
          <div key={m.id} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-3">

              {/* Avatar */}
              <img
                src={m.avatar}
                alt={m.name}
                className="w-12 h-12 rounded-full"
              />

              {/* Info */}
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{m.name}</p>
                <p className="text-sm text-gray-400">ID: {m.id}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => goToMetric(m.id, "host")}
                    className="px-3 py-1 rounded-full border border-purple-500 text-purple-500 text-sm"
                  >
                    Host: {m.host}
                  </button>

                  <button
                    onClick={() => goToMetric(m.id, "coins")}
                    className="px-3 py-1 rounded-full border border-orange-400 text-orange-500 text-sm"
                  >
                    🪙 {m.coins}
                  </button>
                </div>

                <button
                  onClick={() => goToMetric(m.id, "total")}
                  className="px-3 py-1 rounded-full border border-orange-400 text-orange-500 text-sm"
                >
                  Total: {m.total}
                </button>

                <span className="text-xs text-gray-400">{m.month}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
