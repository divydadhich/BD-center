import { BrowserRouter, Routes, Route } from "react-router-dom";

import BDCenter from "./pages/BDCenter";
import Wallet from "./pages/Wallet";
import BDMember from "./pages/BDMember";
import AgentMember from "./pages/AgentMember";
import AgentList from "./pages/AgentList";
import TeammateDetail from "./pages/TeammateDetail";

// import MemberActions from "./pages/MemberActions";
import AgentMembers from "./pages/AgentMembers";
import AgentMetricDetail from "./components/MemberActionSheet";
import InviteAgent from "./pages/InviteAgent";
import InviteBD from "./pages/InviteBD";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= MAIN ================= */}
        <Route path="/" element={<BDCenter />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/settings" element={<Settings />} />

        {/* ================= BD ================= */}
        <Route path="/bd-member" element={<BDMember />} />

        {/* ================= AGENT ================= */}
        <Route path="/agent-member" element={<AgentMember />} />
        <Route path="/agents" element={<AgentList />} />
        <Route path="/teammate/:id" element={<TeammateDetail />} />
        <Route path="/agent-members/:agentId" element={<AgentMembers />} />

        {/* ✅ AGENT METRIC DETAILS (HOST / COINS / TOTAL) */}
        <Route
  path="/agent-members/:agentId/:type"
  element={<AgentMetricDetail />}
/>

        {/* ================= MEMBER ACTIONS ================= */}
        {/* <Route path="/member-actions/:id" element={<MemberActions />} /> */}
        {/* <Route path="/member-actions/:id/:action" element={<MemberActions />} /> */}

        {/* ================= INVITE ================= */}
        <Route path="/invite-agent" element={<InviteAgent />} />
        <Route path="/invite-bd" element={<InviteBD />} />

      </Routes>
    </BrowserRouter>
  );
}
