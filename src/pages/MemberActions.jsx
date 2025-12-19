import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

// Mock data for the member
const mockMemberData = {
  "1007681": {
    name: "꧁Deep꧂",
    avatar: "https://i.pravatar.cc/100?img=11",
    id: "1007681",
    agent: "eep5 Agent",
    timePlayed: "0s",
    coins: "0",
    month: "2025-12",
    // Additional data for the actions page
    teamStats: {
      totalMembers: 6,
      activeToday: 2,
      totalCoins: "3.25M",
      totalEarnings: "375$"
    },
    memberDetails: [
      {
        id: "1007681",
        name: "꧁Deep꧂",
        avatar: "https://i.pravatar.cc/100?img=11",
        agent: "eep5 Agent",
        timePlayed: "0s",
        coins: "0",
        month: "2025-12",
        selected: true
      },
      {
        id: "2474047",
        name: "✝Ghwāhi",
        avatar: "https://i.pravatar.cc/100?img=12",
        agent: "Premium Agent",
        timePlayed: "2.5h",
        coins: "3.25M",
        month: "2025-12",
        selected: false
      },
      {
        id: "2641934",
        name: "💞 Aryan 💞",
        avatar: "https://i.pravatar.cc/100?img=13",
        agent: "Basic Agent",
        timePlayed: "0s",
        coins: "0",
        month: "2025-12",
        selected: false
      },
      {
        id: "2470440",
        name: "fake love 👁️",
        avatar: "https://i.pravatar.cc/100?img=14",
        agent: "Basic Agent",
        timePlayed: "0s",
        coins: "0",
        month: "2025-12",
        selected: false
      },
      {
        id: "2482728",
        name: "MAHIRU",
        avatar: "https://i.pravatar.cc/100?img=15",
        agent: "Basic Agent",
        timePlayed: "0s",
        coins: "0",
        month: "2025-12",
        selected: false
      },
      {
        id: "2519731",
        name: "Mahi",
        avatar: "https://i.pravatar.cc/100?img=16",
        agent: "Basic Agent",
        timePlayed: "0s",
        coins: "0",
        month: "2025-12",
        selected: false
      }
    ]
  },
  // Add other members data here
};

export default function MemberActions() {
  const { id, action } = useParams();
  const navigate = useNavigate();
  
  // Get member data
  const member = mockMemberData[id] || {
    name: "Unknown Member",
    avatar: "https://i.pravatar.cc/100?img=0",
    id: id || "N/A",
    agent: "N/A Agent",
    timePlayed: "0s",
    coins: "0",
    month: "2025-12",
    teamStats: {
      totalMembers: 0,
      activeToday: 0,
      totalCoins: "0",
      totalEarnings: "0$"
    },
    memberDetails: []
  };

  const handleBack = () => {
    navigate(-1);
  };

  // Get page title based on action type
  const getPageTitle = () => {
    switch(action) {
      case "host": return "Host Team Members";
      case "coins": return "Coins Team Members";
      case "total": return "Earnings Team Members";
      default: return "Team Members";
    }
  };

  const toggleMemberSelection = (memberId) => {
    // In a real app, you would update state here
    console.log("Toggled selection for member:", memberId);
  };

  const selectAllMembers = () => {
    // In a real app, you would update state here
    console.log("Select all members");
  };

  const renderHeaderStats = () => {
    switch(action) {
      case "host":
        return (
          <div className="text-center mb-6">
            <div className="text-sm text-gray-500 mb-1">Total Team Members</div>
            <div className="text-2xl font-bold text-purple-600">{member.teamStats.totalMembers}</div>
          </div>
        );
      case "coins":
        return (
          <div className="text-center mb-6">
            <div className="text-sm text-gray-500 mb-1">Total Team Coins</div>
            <div className="text-2xl font-bold text-orange-600">{member.teamStats.totalCoins}</div>
          </div>
        );
      case "total":
        return (
          <div className="text-center mb-6">
            <div className="text-sm text-gray-500 mb-1">Total Team Earnings</div>
            <div className="text-2xl font-bold text-green-600">{member.teamStats.totalEarnings}</div>
          </div>
        );
      default:
        return (
          <div className="text-center mb-6">
            <div className="text-sm text-gray-500 mb-1">Team Overview</div>
            <div className="text-xl font-bold text-gray-700">{member.teamStats.totalMembers} Members</div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-gray-50">
      {/* HEADER */}
      <PageHeader 
        title={getPageTitle()} 
        onBack={handleBack}
      />

      {/* MAIN CONTENT */}
      <div className="p-4">
        {/* TEAM STATS HEADER */}
        <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
          {renderHeaderStats()}
          
          {/* SEARCH BAR */}
          <div className="mb-6">
            <div className="flex items-center bg-gray-100 rounded-full px-4 h-12">
              <span className="text-gray-400 mr-2">🔍</span>
              <input
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                placeholder="Please enter an account"
              />
            </div>
          </div>

          {/* SELECT ALL OPTION */}
          <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div 
                className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center cursor-pointer"
                onClick={selectAllMembers}
              >
                <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
              </div>
              <span className="font-medium text-gray-700">Select All Members</span>
            </div>
            <span className="text-sm text-gray-400">{member.teamStats.totalMembers} members</span>
          </div>
        </div>

        {/* TEAM MEMBERS LIST */}
        <div className="space-y-3">
          {member.memberDetails.map((memberDetail) => (
            <div 
              key={memberDetail.id}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                {/* CHECKBOX */}
                <div 
                  className="mt-1 cursor-pointer"
                  onClick={() => toggleMemberSelection(memberDetail.id)}
                >
                  {memberDetail.selected ? (
                    <div className="w-5 h-5 border-2 border-purple-500 bg-purple-500 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                  )}
                </div>

                {/* MEMBER INFO */}
                <div className="flex-1">
                  {/* AGENT TYPE */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`font-bold ${
                      memberDetail.agent.includes("eep5") ? "text-purple-600" : 
                      memberDetail.agent.includes("Premium") ? "text-blue-600" : 
                      "text-gray-600"
                    }`}>
                      {memberDetail.agent}
                    </span>
                  </div>

                  {/* STATS ROW */}
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{memberDetail.timePlayed}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{memberDetail.coins}</span>
                    </div>
                  </div>

                  {/* ID AND MONTH */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      ID: {memberDetail.id}
                    </div>
                    <div className="text-xs text-gray-400">
                      {memberDetail.month}
                    </div>
                  </div>
                </div>

                {/* AVATAR */}
                <img
                  src={memberDetail.avatar}
                  alt={memberDetail.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
              </div>

              {/* MEMBER NAME */}
              <div className="mt-3 ml-8">
                <h3 className="font-medium text-gray-800">{memberDetail.name}</h3>
              </div>
            </div>
          ))}

          {/* LOAD MORE BUTTON */}
          <div className="text-center py-6">
            <button className="px-6 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Load more
            </button>
          </div>

          {/* ACTION BUTTONS BASED ON ACTION TYPE */}
          <div className="fixed bottom-6 left-4 right-4">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex gap-3">
                {action === "host" && (
                  <>
                    <button className="flex-1 py-3 bg-purple-50 text-purple-600 rounded-xl font-medium">
                      Assign Host
                    </button>
                    <button className="flex-1 py-3 bg-red-50 text-red-600 rounded-xl font-medium">
                      Remove Host
                    </button>
                  </>
                )}
                {action === "coins" && (
                  <>
                    <button className="flex-1 py-3 bg-orange-50 text-orange-600 rounded-xl font-medium">
                      Distribute Coins
                    </button>
                    <button className="flex-1 py-3 bg-gray-50 text-gray-600 rounded-xl font-medium">
                      Coin History
                    </button>
                  </>
                )}
                {action === "total" && (
                  <>
                    <button className="flex-1 py-3 bg-green-50 text-green-600 rounded-xl font-medium">
                      Pay Earnings
                    </button>
                    <button className="flex-1 py-3 bg-blue-50 text-blue-600 rounded-xl font-medium">
                      Export Report
                    </button>
                  </>
                )}
                {!action && (
                  <button className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-medium">
                    Manage Team
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}