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
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[420px]">

        {/* HEADER */}
        <PageHeader title="Agent List" />

        {/* SEARCH */}
        <div className="px-4 mt-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search agent or ID"
            className="
              w-full h-12
              rounded-xl
              border border-gray-200
              px-4
              text-sm
              outline-none
              focus:ring-2 focus:ring-purple-500
            "
          />
        </div>

        {/* LIST */}
        <div className="px-4 mt-5 space-y-4">
          {members.map((m, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              {/* TOP ROW */}
              <div className="flex items-center gap-4 p-4">
                <img
                  src={m.avatar}
                  alt="avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex-1">
                  <p className="font-semibold text-gray-900">
                    {m.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    ID: {m.id}
                  </p>
                </div>

                <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-600">
                  {m.role}
                </span>
              </div>

              {/* DIVIDER */}
              <div className="h-px bg-gray-200" />

              {/* ACTION ROW (DIFFERENT PART) */}
              <div className="grid grid-cols-2">
                <button
                  onClick={() => setOpenSheet(true)}
                  className="
                    py-3
                    text-sm
                    font-medium
                    text-purple-600
                    hover:bg-purple-50
                    transition
                  "
                >
                  ⏱ Time: {m.time}
                </button>

                <button
                  onClick={() => setOpenSheet(true)}
                  className="
                    py-3
                    text-sm
                    font-medium
                    text-orange-600
                    hover:bg-orange-50
                    transition
                    border-l
                  "
                >
                  🪙 Coins: {m.coins}
                </button>
              </div>

              {/* FOOTER */}
              <div className="px-4 py-2 text-right text-xs text-gray-400">
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
              className="text-purple-600 font-medium text-sm"
            >
              Load more
            </button>
          ) : (
            <p className="text-gray-400 text-sm">
              No more data
            </p>
          )}
        </div>

        {/* BOTTOM SHEET */}
        <MemberActionSheet
          open={openSheet}
          onClose={() => setOpenSheet(false)}
        />
      </div>
    </div>
  );
}
