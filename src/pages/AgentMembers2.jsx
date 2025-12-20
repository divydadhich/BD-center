import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function AgentMembers2() {
  const navigate = useNavigate();
  const { agentId } = useParams(); // comes from /agent-members/:agentId

  const goToMetric = (type) => {
    navigate(`/agent-members/${agentId}/${type}`);
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-100">
      <PageHeader title="Team Members" />

      {/* SEARCH */}
      <div className="px-4 mt-4">
        <div className="flex items-center bg-white rounded-full px-4 h-11 shadow-sm">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            placeholder="Please enter an account"
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* LIST */}
      <div className="p-4 space-y-4">
        {agentMembers.map((m) => (
          <div key={m.id} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-3">

              <img
                src={m.avatar}
                alt={m.name}
                className="w-12 h-12 rounded-full"
              />

              <div className="flex-1">
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-gray-400">ID: {m.id}</p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => goToMetric("host")}
                    className="px-3 py-1 rounded-full border border-purple-500 text-purple-500 text-sm"
                  >
                    Host: {m.host}
                  </button>

                  <button
                    onClick={() => goToMetric("coins")}
                    className="px-3 py-1 rounded-full border border-orange-400 text-orange-500 text-sm"
                  >
                    🪙 {m.coins}
                  </button>
                </div>

                <button
                  onClick={() => goToMetric("total")}
                  className="px-3 py-1 rounded-full border border-orange-400 text-orange-500 text-sm"
                >
                  Total: {m.total}
                </button>

                <span className="text-sm text-gray-400">{m.month}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
