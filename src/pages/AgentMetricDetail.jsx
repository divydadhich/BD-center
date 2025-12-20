import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const agentMembers = [
  {
    name: "꧁Deep꧂",
    avatar: "https://i.pravatar.cc/100?img=11",
    id: "1007681",
    time: "0s",
    coins: "0",
    month: "2025-12",
  },
];

export default function AgentMetricDetail() {
  const navigate = useNavigate();
  const { agentId } = useParams();

  const [hasMore, setHasMore] = useState(true);

  const agent = agentMembers.find((a) => a.id === agentId);
  if (!agent) return null;

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-[#eaf0ff]">

      {/* HEADER */}
      <div className="h-14 flex items-center justify-between px-4 bg-gradient-to-b from-[#1b1b3b] to-[#141433] text-white">
        <button onClick={() => navigate(-1)} className="text-2xl">
          ‹
        </button>

        <h1 className="text-lg font-semibold">Team Members</h1>

        <button onClick={() => navigate(-1)} className="text-xl">
          ✕
        </button>
      </div>

      {/* SEARCH */}
      <div className="px-4 mt-4">
        <div className="flex items-center gap-3 bg-white rounded-full px-4 h-11 shadow-sm">
          <span className="text-gray-400">🔍</span>
          <input
            placeholder="Please enter an account"
            className="w-full text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>

      {/* MEMBER CARD */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center">

          {/* Avatar */}
          <img
            src={agent.avatar}
            alt={agent.name}
            className="w-14 h-14 rounded-full object-cover"
          />

          {/* Info */}
          <div className="ml-4 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">
                {agent.name}
              </span>
              <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-500">
                Agent
              </span>
            </div>

            <p className="text-sm text-gray-400 mt-1">
              ID: {agent.id}
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-2">
            <div className="flex items-center gap-1 px-3 h-8 rounded-full border border-indigo-300 text-indigo-500 text-sm">
              🕒 {agent.time}
            </div>

            <div className="flex items-center gap-1 px-3 h-8 rounded-full border border-orange-300 text-orange-500 text-sm">
              🪙 {agent.coins}
            </div>
          </div>
        </div>

        {/* Month */}
        <div className="text-right text-xs text-gray-400 mt-2 pr-2">
          {agent.month}
        </div>
      </div>

      {/* LOAD MORE */}
      <div className="text-center mt-10 text-sm">
        {hasMore ? (
          <button
            onClick={() => setHasMore(false)}
            className="text-indigo-500 font-medium active:scale-95 transition"
          >
            Load more
          </button>
        ) : (
          <span className="text-gray-400">
            No more data
          </span>
        )}
      </div>
    </div>
  );
}
