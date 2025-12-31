import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const agentMembers = Array(10).fill({
  name: "꧁Deep꧂",
  avatar: "https://i.pravatar.cc/100?img=11",
  id: "1007681",
  host: 1,
  coins: "0",
  total: "0$",
  month: "2025-12",
});

export default function AgentMember() {
  const navigate = useNavigate();

  const goToAgentList = (type) => {
    navigate(`/agents?type=${type}`);
  };

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* HEADER */}
      <PageHeader title="Agent Members" />

      {/* LIST */}
      <div className="px-4 py-4 sm:max-w-[430px] sm:mx-auto space-y-6">
        {agentMembers.map((m, index) => (
          <div key={index} className="space-y-3">

            {/* ===== MAIN CARD (CENTER CONTENT) ===== */}
            <div className="bg-white rounded-2xl p-5 shadow-md text-center">
              <img
                src={m.avatar}
                alt={m.name}
                className="w-14 h-14 rounded-full mx-auto mb-3"
              />

              <p className="font-semibold text-gray-900 text-[16px]">
                {m.name}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                ID · {m.id}
              </p>

              <p className="text-[11px] text-gray-400 mt-1">
                {m.month}
              </p>
            </div>

            {/* ===== ACTION BUTTONS (OUTSIDE CARD) ===== */}
            <div className="flex justify-between gap-2">
              <ActionButton
                label={`Hosts ${m.host}`}
                color="purple"
                onClick={() => goToAgentList("host")}
              />
              <ActionButton
                label={`Coins ${m.coins}`}
                color="orange"
                onClick={() => goToAgentList("coins")}
              />
              <ActionButton
                label={`Total ${m.total}`}
                color="green"
                onClick={() => goToAgentList("total")}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== BUTTON COMPONENT ===== */

function ActionButton({ label, color, onClick }) {
  const styles = {
    purple: "bg-purple-50 text-purple-600 ring-purple-200",
    orange: "bg-orange-50 text-orange-600 ring-orange-200",
    green: "bg-green-50 text-green-600 ring-green-200",
  };

  return (
    <button
      onClick={onClick}
      className={`
        flex-1
        py-2
        rounded-xl
        text-xs
        font-medium
        ring-1
        ${styles[color]}
        hover:opacity-90
        active:scale-95
        transition
      `}
    >
      {label}
    </button>
  );
}
