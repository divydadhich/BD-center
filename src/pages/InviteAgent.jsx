import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Invite() {
  const [hostId, setHostId] = useState("");

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-100">
      {/* HEADER */}
      <PageHeader title="Invite Members" />

      {/* CONTENT */}
      <div className="px-5 pt-6 space-y-6">

        {/* STEPS */}
        {/* <div className="space-y-3 text-gray-800 text-base font-medium">
          <p>1、Download 4Party app.</p>
          <p>2、My Page (Host Center).</p>
          <p>3、Enter the team ID to apply for joining.</p>
        </div> */}

        {/* FORM CARD */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-gray-800 font-medium mb-3">
            Host account:
          </h3>

          <input
            type="text"
            value={hostId}
            onChange={(e) => setHostId(e.target.value)}
            placeholder="Please enter an Host account"
            className="
              w-full
              h-11
              rounded-full
              bg-gray-100
              px-4
              text-sm
              outline-none
              placeholder-gray-400
            "
          />

          <p className="mt-3 text-xs text-gray-400 leading-relaxed">
            Enter your proxy account, and once the anchor application
            is approved, you will become a signed anchor.
          </p>
        </div>

        {/* APPLY BUTTON */}
        <div className="pt-6">
          <button
            className="
              w-full
              h-12
              rounded-full
              bg-[#5C039B]
              text-white
              text-lg
              font-medium
              shadow-md
              active:scale-[0.98]
              transition
            "
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}