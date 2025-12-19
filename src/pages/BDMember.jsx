import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const members = [
  {
    name: "PROFESSC",
    avatar: "https://i.pravatar.cc/100?img=1",
    id: "2469315",
    agent: 111,
    coins: "17.36M",
    total: "1744$",
    month: "2025-12",
  },
  {
    name: "💔 KUNAL",
    avatar: "https://i.pravatar.cc/100?img=2",
    id: "12688433",
    agent: 11,
    coins: "558.85K",
    total: "58$",
    month: "2025-12",
  },
  {
    name: "☆ Rocky o",
    avatar: "https://i.pravatar.cc/100?img=3",
    id: "2664772",
    agent: 6,
    coins: "0",
    total: "0$",
    month: "2025-12",
  },
  {
    name: "B RaHuL",
    avatar: "https://i.pravatar.cc/100?img=4",
    id: "12694441",
    agent: 3,
    coins: "0",
    total: "0$",
    month: "2025-12",
  },
];

export default function BDMember() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredMembers = members.filter((m) =>
    m.name.toLowerCase().includes(query.toLowerCase()) ||
    m.id.includes(query)
  );

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-100">
      {/* HEADER */}
      <PageHeader title="Team Members" />

      {/* SEARCH */}
      <div className="px-4 mt-4">
        <div className="flex items-center bg-white rounded-full px-4 h-11 shadow-sm">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            type="text"
            placeholder="Please enter an account"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full outline-none text-sm text-gray-600"
          />
        </div>
      </div>

      {/* LIST */}
      <div className="p-4 space-y-4">
        {filteredMembers.map((m, i) => (
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
                <p className="font-semibold text-gray-800">
                  {m.name}
                </p>
                <p className="text-sm text-gray-400">
                  ID: {m.id}
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  {/* AGENT BUTTON */}
                  <button
                    onClick={() =>
                      navigate(`/agent-members/${m.id}`)
                    }
                    className="
                      px-3 py-1
                      text-sm
                      rounded-full
                      border
                      border-purple-500
                      text-purple-500
                      active:scale-95
                      transition
                    "
                  >
                    Agent: {m.agent}
                  </button>

                  {/* COINS */}
                  <button
  onClick={() => navigate(`/agent-members-coins/${m.id}`)}
  className="
    px-3 py-1
    text-sm
    rounded-full
    border
    border-orange-400
    text-orange-500
    flex
    items-center
    gap-1
    active:scale-95
    transition
  "
>
  🪙 {m.coins}
</button>

                </div>

                <div className="flex items-center gap-4">
                <button
  onClick={() => navigate(`/agent-members-total/${m.id}`)}
  className="
    px-3 py-1
    rounded-full
    border
    border-orange-400
    text-orange-500
    text-sm
    active:scale-95
    transition
  "
>
  Total: {m.total}
</button>

                  <span className="text-sm text-gray-400">
                    {m.month}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="text-center pb-10">
        <button className="text-blue-500 text-sm">
          Load more
        </button>
      </div>
    </div>
  );
}
