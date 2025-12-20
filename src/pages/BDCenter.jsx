import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
export default function BDCenter() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen max-w-[430px] mx-auto px-4 pb-10 bg-white">

      {/* HEADER */}
 <PageHeader title="BD CENTER" />

      {/* PROFILE CARD */}
      <div className="mt-2 rounded-3xl p-4 flex items-center gap-4
        bg-white/70 backdrop-blur-md border border-gray-200 shadow-md">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
          👤
        </div>
        <div>
          <p className="text-[16px] font-semibold text-gray-900">
            BD Center
          </p>
          <p className="text-[13px] text-gray-500">
            ID: 1
          </p>
        </div>
      </div>

      {/* MONTHLY STATS */}
      <div className="flex justify-between mt-6">
        <CircleCard value="$0" label="This month" />
        <CircleCard value="$0" label="Last month" />
      </div>

      {/* BALANCE CARD */}
      <div
        onClick={() => nav("/wallet")}
        className="mt-6 rounded-3xl p-5 flex items-center justify-between
        bg-white/70 backdrop-blur-md border border-gray-200 shadow-md
        active:scale-95 transition"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl
            bg-gradient-to-br from-blue-400 to-indigo-500
            flex items-center justify-center text-white text-xl">
            💼
          </div>
          <p className="font-medium text-gray-900">Balance</p>
        </div>
        <p className="font-semibold text-xl text-gray-900">$0</p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-2 gap-4 mt-6">
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
  );
}

/* ================= COMPONENTS ================= */

function CircleCard({ value, label }) {
  return (
    <div className="w-[150px] h-[150px] rounded-full
      bg-white/70 backdrop-blur-md border border-gray-200 shadow-md
      flex flex-col items-center justify-center">
      <p className="text-3xl font-semibold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}

function ActionCard({ icon, label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="rounded-3xl p-5 flex items-center gap-4
      bg-white/70 backdrop-blur-md border border-gray-200 shadow-md
      active:scale-95 transition"
    >
      <div className="w-12 h-12 rounded-2xl
        bg-gradient-to-br from-blue-400 to-indigo-500
        flex items-center justify-center text-white text-xl">
        {icon}
      </div>
      <p className="font-medium text-gray-900">{label}</p>
    </div>
  );
}
