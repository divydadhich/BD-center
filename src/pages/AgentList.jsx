import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MemberActionSheet from "../components/MemberActionSheet";
import PageHeader from "../components/PageHeader";

const members = [
  {
    name: "꧁Deep꧂",
    role: "Agent",
    avatar: "https://i.pravatar.cc/100?img=11",
    id: "1007681",
    time: "0s",
    coins: "0",
    month: "2025-12",
  },
];

export default function AgentList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <div className="min-h-screen bg-[#e8f0ff] flex justify-center">
      {/* Responsive container */}
      <div className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px]">

        {/* HEADER */}
        <PageHeader title="Agent List" />

        {/* SEARCH */}
        <div className="px-3 sm:px-4 mt-4">
          <div className="flex items-center bg-white rounded-full px-4 py-3 shadow">
            <span className="text-gray-400 mr-2">🔍</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Please enter an account"
              className="w-full outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* MEMBER LIST */}
        <div className="px-3 sm:px-4 mt-4 space-y-4">
          {members.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-md"
            >
              <div className="flex items-start justify-between gap-3">

                {/* LEFT */}
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={m.avatar}
                    alt="avatar"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-sm sm:text-base truncate">
                        {m.name}
                      </p>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-red-400 text-white">
                        {m.role}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">
                      ID: {m.id}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col-2 sm:flex-row gap-2 shrink-0">
                  <button
                    onClick={() => setOpenSheet(true)}
                    className="px-3 py-1 rounded-full border border-purple-400 text-purple-500 text-xs sm:text-sm flex items-center justify-center gap-1 active:scale-95"
                  >
                    🕒 {m.time}
                  </button>

                  <button
                    onClick={() => setOpenSheet(true)}
                    className="px-3 py-1 rounded-full border border-orange-400 text-orange-500 text-xs sm:text-sm flex items-center justify-center gap-1 active:scale-95"
                  >
                    🪙 {m.coins}
                  </button>
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex justify-end mt-2 text-xs sm:text-sm text-gray-400">
                {m.month}
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        <div className="mt-8 text-center">
          {hasMore ? (
            <button
              onClick={() => setHasMore(false)}
              className="text-blue-500 font-medium text-sm sm:text-base"
            >
              Load more
            </button>
          ) : (
            <p className="text-gray-400 font-medium text-sm sm:text-base">
              No more data
            </p>
          )}
        </div>

        {/* BOTTOM POPUP */}
        <MemberActionSheet
          open={openSheet}
          onClose={() => setOpenSheet(false)}
        />
      </div>
    </div>
  );
}
