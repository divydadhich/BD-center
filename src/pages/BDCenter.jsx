import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function BDCenter() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen max-w-[430px] mx-auto bg-white pb-8">

      {/* HEADER */}
      <PageHeader title="BD CENTER" />

      {/* CONTENT */}
      <div className="px-4">

        {/* PROFILE CARD */}
        <div className="mt-3 rounded-3xl p-4 flex items-center gap-3
          bg-white/70 backdrop-blur-md border border-gray-200 shadow-md">
          
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100 flex items-center justify-center text-lg">
            👤
          </div>

          <div className="min-w-0">
            <p className="text-sm sm:text-base font-semibold text-gray-900 truncate">
              BD Center
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              ID: 1
            </p>
          </div>
        </div>

        {/* MONTHLY STATS */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <CircleCard value="$0" label="This month" />
          <CircleCard value="$0" label="Last month" />
        </div>

        {/* BALANCE CARD */}
        <div
          onClick={() => nav("/wallet")}
          className="mt-6 rounded-3xl p-4 flex items-center justify-between
          bg-white/70 backdrop-blur-md border border-gray-200 shadow-md
          active:scale-95 transition"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl
              bg-gradient-to-br from-blue-400 to-indigo-500
              flex items-center justify-center text-white text-lg sm:text-xl">
              💼
            </div>
            <p className="font-medium text-sm sm:text-base text-gray-900">
              Balance
            </p>
          </div>

          <p className="font-semibold text-lg sm:text-xl text-gray-900">
            $0
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-6">
          <ActionCard
            label="Agent list"
            icon="📄"
            onClick={() => nav("/agent-member")}
          />
          <ActionCard
            label="Invite Agent"
            icon="➕"
            onClick={() => nav("/invite-agent")}
          />
        </div>

      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function CircleCard({ value, label }) {
  return (
    <div className="
      aspect-square
      w-full
      max-w-[160px]
      mx-auto
      rounded-full
      bg-white/70 backdrop-blur-md border border-gray-200 shadow-md
      flex flex-col items-center justify-center
    ">
      <p className="text-xl sm:text-3xl font-semibold text-gray-900">
        {value}
      </p>
      <p className="text-xs sm:text-sm text-gray-500 mt-1 text-center">
        {label}
      </p>
    </div>
  );
}

function ActionCard({ icon, label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="rounded-3xl p-4 flex items-center gap-3
      bg-white/70 backdrop-blur-md border border-gray-200 shadow-md
      active:scale-95 transition"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl
        bg-gradient-to-br from-blue-400 to-indigo-500
        flex items-center justify-center text-white text-lg sm:text-xl">
        {icon}
      </div>

      <p className="font-medium text-sm sm:text-base text-gray-900">
        {label}
      </p>
    </div>
  );
}
