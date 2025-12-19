import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function AgentMembers2() {
  const navigate = useNavigate();

  const goToDetail = (id, type) => {
    navigate(`/agent/${id}/${type}`);
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-100">
      <PageHeader title="Agent Members" />

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
        {AgentMembers2.map((m) => (
          <div
            key={m.id}
            className="bg-white rounded-2xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <img
                src={m.avatar}
                alt={m.name}
                className="w-12 h-12 rounded-full"
              />

              <div className="flex-1">
                <p className="font-semibold text-gray-800">{m.name}</p>
                <p className="text-sm text-gray-400">ID: {m.id}</p>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => goToDetail(m.id, "host")}
                    className="px-3 py-1 rounded-full border border-purple-500 text-purple-500 text-sm"
                  >
                    Host: {m.host}
                  </button>

                  <button
                    onClick={() => goToDetail(m.id, "coins")}
                    className="px-3 py-1 rounded-full border border-orange-400 text-orange-500 text-sm"
                  >
                    🪙 {m.coins}
                  </button>
                </div>

                <button
                  onClick={() => goToDetail(m.id, "total")}
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
