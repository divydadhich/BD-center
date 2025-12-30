import { useState } from "react";
import TeammateWorkDetailsSheet from "../components/TeammateWorkDetailsSheet";
import PageHeader from "../components/PageHeader";

const workHistory = [
  {
    month: "2025-10",
    target: 140,
    duration: "00h10m",
    level: 0,
    salary: "$0",
    status: "Settled",
  },
  {
    month: "2025-09",
    target: 82,
    duration: "00h10m",
    level: 0,
    salary: "$0",
    status: "Settled",
  },
  {
    month: "2025-08",
    target: 2171,
    duration: "0s",
    level: 0,
    salary: "$0",
    status: "Settled",
  },
  {
    month: "2025-07",
    target: 343,
    duration: "03h15m",
    level: 0,
    salary: "$0",
    status: "Settled",
  },
];

export default function TeammateDetail() {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[390px]">

        {/* HEADER */}
        <PageHeader title="Teammate Details" />

        {/* PROFILE HEADER (DIFFERENT) */}
        <div className="px-4 mt-4">
          <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4">
            <img
              src="https://i.pravatar.cc/100?img=11"
              alt="avatar"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900">
                  ꧁Deep꧂
                </p>
                <span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-600">
                  Agent
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                ID: 1007681
              </p>
            </div>
          </div>
        </div>

        {/* WORK HISTORY – TIMELINE STYLE */}
        <div className="px-4 mt-6 pb-8 space-y-6">
          {workHistory.map((item, index) => (
            <div key={index} className="relative pl-6">

              {/* TIMELINE DOT */}
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-purple-500" />
              <div className="absolute left-[5px] top-4 bottom-0 w-px bg-gray-200" />

              {/* CONTENT */}
              <div className="border border-gray-200 rounded-xl p-4">
                {/* TOP */}
                <div className="flex items-center justify-between mb-3">
                  <p className="font-medium text-gray-900">
                    {item.month}
                  </p>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
                    {item.status}
                  </span>
                </div>

                {/* DETAILS */}
                <div className="space-y-2 text-sm text-gray-600">
                  <Row label="Target" value={item.target} />
                  <Row label="Duration" value={item.duration} />
                  <Row label="Target Level" value={item.level} />
                  <Row label="Salary" value={item.salary} />
                </div>

                {/* ACTION */}
                <button
                  onClick={() => setOpenSheet(true)}
                  className="mt-4 text-sm font-medium text-purple-600"
                >
                  View details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SHEET */}
        <TeammateWorkDetailsSheet
          open={openSheet}
          onClose={() => setOpenSheet(false)}
        />
      </div>
    </div>
  );
}

/* SMALL HELPER */
const Row = ({ label, value }) => (
  <div className="flex justify-between">
    <span>{label}</span>
    <span className="font-medium text-gray-900">{value}</span>
  </div>
);
