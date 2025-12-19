import { useNavigate } from "react-router-dom";

export default function BDCenter() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-soft max-w-[430px] mx-auto">

      {/* Header */}
      <div className="bg-primary text-white px-4 py-4 flex items-center justify-between">
        <span className="text-xl">←</span>
        <h1 className="text-lg font-semibold">BD Center</h1>
        <span className="text-xl">✕</span>
      </div>

      {/* Profile Card */}
      <div className="bg-card mx-4 mt-4 rounded-xl p-4 flex items-center gap-4 shadow">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-xl">
          👩
        </div>
        <div>
          <p className="font-semibold text-gray-800">
            PROFESSOR 🤓
            <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-[2px] rounded-full">
              BD Leader
            </span>
          </p>
          <p className="text-sm text-gray-400">ID:2469315</p>
        </div>
      </div>

      {/* Salary Cards */}
      <div className="bg-card mx-4 mt-4 rounded-xl p-4 shadow flex justify-between">
        <p className="text-gray-600">Total team salary for this month</p>
        <p className="text-orange-500 font-bold">1744$</p>
      </div>

      <div className="bg-card mx-4 mt-3 rounded-xl p-4 shadow flex justify-between">
        <p className="text-gray-600">Total team salary for last month</p>
        <p className="text-orange-500 font-bold">3789$</p>
      </div>

      {/* Wallet */}
      <div
        onClick={() => nav("/wallet")}
        className="bg-card mx-4 mt-4 rounded-xl p-6 shadow flex items-center gap-4 active:scale-95 transition"
      >
        <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white text-xl">
          💰
        </div>
        <p className="font-medium">Wallet</p>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-4 gap-4 mx-4 mt-6">
        <Icon label="BD member" icon="👥" onClick={() => nav("/bd-member")} />
        <Icon label="Agent member" icon="👤" onClick={() => nav("/agent-member")} />
        <Icon label="Invite agent" icon="💌" onClick={() => nav("/invite-agent")} />
        <Icon label="Invite BD" icon="🧑‍💼" onClick={() => nav("/invite-bd")} />
      </div>

      {/* Settings */}
      <div
        onClick={() => nav("/settings")}
        className="bg-card mx-4 mt-6 rounded-xl p-6 shadow flex items-center gap-4 active:scale-95 transition"
      >
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
          ⚙️
        </div>
        <p className="font-medium">Settings</p>
      </div>

    </div>
  );
}

function Icon({ icon, label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-2 active:scale-95 transition"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl">
        {icon}
      </div>
      <p className="text-xs text-center text-gray-600">{label}</p>
    </div>
  );
}
