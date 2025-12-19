import { useState } from "react";
import PageHeader from "../components/PageHeader";

const MOCK_MEMBERS = [
  { id: "1001", name: "Amit Kumar" },
  { id: "1002", name: "Riya Sharma" },
  { id: "1003", name: "Deep Singh" },
  { id: "1004", name: "Neha Verma" },
  { id: "1005", name: "Rahul Mehta" },
];

export default function Settings() {
  const [showBD, setShowBD] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [assistants, setAssistants] = useState([]);

  const filteredMembers = MOCK_MEMBERS.filter(
    (m) =>
      !assistants.find((a) => a.id === m.id) &&
      (m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.id.includes(search))
  );

  const addAssistant = (member) => {
    if (assistants.length >= 3) return;
    setAssistants([...assistants, member]);
    setSearch("");
    setShowSearch(false);
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-100">
      <PageHeader title="BD Assistant" />

      <div className="p-4">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          
          {/* CLICKABLE ROW */}
          <button
            onClick={() => setShowBD((prev) => !prev)}
            className="w-full h-14 px-4 flex items-center justify-between text-gray-800 font-medium active:bg-gray-100"
          >
            <span className="text-lg">BD Assistant</span>
            <span
              className={`text-xl transition-transform ${
                showBD ? "rotate-90" : ""
              }`}
            >
              ›
            </span>
          </button>

          {/* POP-DOWN */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showBD ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-gray-200 px-4 py-6">

              {/* TITLE */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  BD Assistant ({assistants.length}/3)
                </h2>

                <button
                  disabled={assistants.length >= 3}
                  onClick={() => setShowSearch(true)}
                  className="flex items-center gap-1 text-indigo-600 disabled:text-gray-400"
                >
                  <span className="text-xl">👤＋</span>
                  <span className="font-medium">Add</span>
                </button>
              </div>

              {/* ADDED ASSISTANTS */}
              {assistants.length > 0 && (
                <div className="space-y-3 mb-6">
                  {assistants.map((a) => (
                    <div
                      key={a.id}
                      className="flex items-center justify-between p-3 bg-gray-100 rounded-xl"
                    >
                      <div>
                        <p className="font-medium">{a.name}</p>
                        <p className="text-sm text-gray-500">ID: {a.id}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* EMPTY STATE */}
              {assistants.length === 0 && (
                <div className="text-center text-gray-400 py-8">
                  No assistants added
                </div>
              )}

              {/* SEARCH PANEL */}
              {showSearch && (
                <div className="border-t pt-4">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name or ID"
                    className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <div className="mt-4 space-y-2 max-h-48 overflow-y-auto">
                    {filteredMembers.length > 0 ? (
                      filteredMembers.map((m) => (
                        <button
                          key={m.id}
                          onClick={() => addAssistant(m)}
                          className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl active:bg-gray-100"
                        >
                          <div>
                            <p className="font-medium">{m.name}</p>
                            <p className="text-sm text-gray-500">ID: {m.id}</p>
                          </div>
                          <span className="text-indigo-600 font-medium">
                            Add
                          </span>
                        </button>
                      ))
                    ) : (
                      <p className="text-center text-gray-400 py-4">
                        No results found
                      </p>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
