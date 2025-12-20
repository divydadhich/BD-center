import PageHeader from "../components/PageHeader";

export default function Wallet() {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-gray-100">

      {/* HEADER */}
      <PageHeader title="Balance" />

      {/* BALANCE CARD */}
      <div className="px-4 mt-4">
        <div className="h-40 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-6 shadow-md">
          <h1 className="text-4xl font-bold">$0</h1>
          <p className="text-sm opacity-90 mt-2">
            Wallet Balance · USD
          </p>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="px-4 mt-6 grid grid-cols-3 gap-4">
        <ActionCard
          icon="💰"
          title="Exchange"
          subtitle="Convert coins"
        />
        <ActionCard
          icon="✉️"
          title="Transfer"
          subtitle="Send money"
        />
        <ActionCard
          icon="🏦"
          title="Withdraw"
          subtitle="Bank withdrawal"
        />
      </div>

      {/* RECENT ACTIVITY */}
      <div className="px-4 mt-8">
        <h2 className="font-semibold text-gray-800 mb-3">
          Recent Activity
        </h2>

        <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="text-4xl mb-4 text-gray-300">⏳</div>
          <p className="font-medium text-gray-700">
            No records yet
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Make your first transfer
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= ACTION CARD ================= */

const ActionCard = ({ icon, title, subtitle }) => (
  <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
    <div className="text-3xl mb-2">{icon}</div>
    <p className="font-medium text-gray-800">{title}</p>
    <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
  </div>
);
