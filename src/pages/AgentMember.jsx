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
    name: "꧁Deep꧂",
    avatar: "https://i.pravatar.cc/100?img=11",
    id: "1007681",
    host: 1,
    coins: "0",
    total: "0$",
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
    name: "꧁Deep꧂",
    avatar: "https://i.pravatar.cc/100?img=11",
    id: "1007681",
    host: 1,
    coins: "0",
    total: "0$",
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
    name: "꧁Deep꧂",
    avatar: "https://i.pravatar.cc/100?img=11",
    id: "1007681",
    host: 1,
    coins: "0",
    total: "0$",
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
    name: "꧁Deep꧂",
    avatar: "https://i.pravatar.cc/100?img=11",
    id: "1007681",
    host: 1,
    coins: "0",
    total: "0$",
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
    name: "꧁Deep꧂",
    avatar: "https://i.pravatar.cc/100?img=11",
    id: "1007681",
    host: 1,
    coins: "0",
    total: "0$",
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
    name: "꧁Deep꧂",
    avatar: "https://i.pravatar.cc/100?img=11",
    id: "1007681",
    host: 1,
    coins: "0",
    total: "0$",
    month: "2025-12",
  },
];

export default function AgentMember() {
  const navigate = useNavigate();

  const goToAgentList = (type) => {
    navigate(`/agents?type=${type}`);
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <PageHeader title="Agent Members" />

      {/* CONTENT */}
      <div className="px-4 py-2 divide-y">
        {agentMembers.map((m, index) => (
          <div
            key={`${m.id}-${index}`}
            className="py-4 flex gap-4 items-center"
          >
            {/* AVATAR */}
            <img
              src={m.avatar}
              alt={m.name}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />

            {/* CENTER INFO */}
            <div className="flex-1">
              <p className="font-semibold">{m.name}</p>
              <p className="text-xs text-gray-500">
                ID: {m.id}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {m.month}
              </p>
            </div>

            {/* RIGHT BUTTONS (IMPROVED) */}
            <div className="flex flex-col gap-2 text-xs text-right">
              <button
                onClick={() => goToAgentList("host")}
                className="
                  px-3 py-1.5
                  rounded-xl
                  bg-purple-50
                  text-purple-600
                  font-medium
                  ring-1 ring-purple-200
                  hover:bg-purple-100
                  active:scale-95
                  transition
                "
              >
                Hosts · {m.host}
              </button>

              <button
                onClick={() => goToAgentList("coins")}
                className="
                  px-3 py-1.5
                  rounded-xl
                  bg-orange-50
                  text-orange-600
                  font-medium
                  ring-1 ring-orange-200
                  hover:bg-orange-100
                  active:scale-95
                  transition
                "
              >
                Coins · {m.coins}
              </button>

              <button
                onClick={() => goToAgentList("total")}
                className="
                  px-3 py-1.5
                  rounded-xl
                  bg-green-50
                  text-green-600
                  font-medium
                  ring-1 ring-green-200
                  hover:bg-green-100
                  active:scale-95
                  transition
                "
              >
                Total · {m.total}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
