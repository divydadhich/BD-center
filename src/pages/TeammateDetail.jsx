import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <div className="min-h-screen bg-[#e8f0ff] flex justify-center">
      <div className="w-full max-w-[390px]">

       {/* HEADER */}
      <PageHeader title="Teammate Details" />

        {/* PROFILE */}
        <div className="px-4 mt-4">
          <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow">
            <img
              src="https://i.pravatar.cc/100?img=11"
              alt="avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">꧁Deep꧂</p>
                <span className="px-2 py-0.5 text-xs rounded-full bg-red-400 text-white">
                  Agent
                </span>
              </div>
              <p className="text-sm text-gray-400">
                ID: 1007681
              </p>
            </div>
          </div>
        </div>

        {/* WORK HISTORY */}
        <div className="px-4 mt-4 space-y-4 pb-8">
          {workHistory.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow"
            >
              {/* TOP */}
              <div className="flex items-center justify-between mb-3">
                <p className="text-blue-500 font-semibold">
                  {item.month}
                </p>
                <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-sm">
                  {item.status}
                </span>
              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <p className="text-gray-600">
                  Target:
                  <span className="ml-2 text-orange-500 font-semibold">
                    {item.target}
                  </span>
                </p>

                <p className="text-gray-600 text-right">
                  Duration:
                  <span className="ml-2 text-orange-500 font-semibold">
                    {item.duration}
                  </span>
                </p>

                <p className="text-gray-600">
                  Target LV:
                  <span className="ml-2 text-orange-500 font-semibold">
                    {item.level}
                  </span>
                </p>

                <p className="text-gray-600 text-right">
                  Salary:
                  <span className="ml-2 text-orange-500 font-semibold">
                    {item.salary}
                  </span>
                </p>
              </div>

              {/* SEE MORE */}
              <button
                onClick={() => setOpenSheet(true)}
                className="mt-4 w-full text-center text-blue-500 text-sm font-medium"
              >
                See more details&gt;&gt;
              </button>
            </div>
          ))}
        </div>

        {/* BOTTOM DETAILS POPUP */}
        <TeammateWorkDetailsSheet
          open={openSheet}
          onClose={() => setOpenSheet(false)}
        />

      </div>
    </div>
  );
}
