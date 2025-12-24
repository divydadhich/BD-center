import { useEffect, useRef, useState } from "react";

export default function TeammateWorkDetailsSheet({ open, onClose }) {
  const sheetRef = useRef(null);
  const startY = useRef(0);
  const currentY = useRef(0);

  const [translateY, setTranslateY] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (open) {
      setTranslateY(0);
    }
  }, [open]);

  if (!open) return null;

  /* ================= TOUCH HANDLERS ================= */

  const onTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
    setDragging(true);
  };

  const onTouchMove = (e) => {
    if (!dragging) return;

    currentY.current = e.touches[0].clientY;
    const diff = currentY.current - startY.current;

    if (diff > 0) {
      setTranslateY(diff);
    }
  };

  const onTouchEnd = () => {
    setDragging(false);

    if (translateY > 120) {
      onClose();
    } else {
      setTranslateY(0);
    }
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* BOTTOM SHEET */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center">
        <div
          ref={sheetRef}
          style={{
            transform: `translateY(${translateY}px)`,
            transition: dragging ? "none" : "transform 0.3s ease",
          }}
          className="w-full max-w-[420px] bg-white rounded-t-3xl p-4"
        >
          {/* DRAG HANDLE */}
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="w-full flex justify-center py-2 cursor-grab active:cursor-grabbing"
          >
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>

          {/* TITLE */}
          <h2 className="text-center text-lg font-semibold mb-4">
            Details
          </h2>

          {/* SUMMARY */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-blue-500 font-semibold">2025-10</p>
            <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-sm">
              Settled
            </span>
          </div>

          <div className="grid grid-cols-2 gap-y-3 text-sm mb-4">
            <p>
              Target:
              <span className="ml-2 text-blue-500 font-semibold">32005</span>
            </p>
            <p className="text-right">
              Duration:
              <span className="ml-2 text-purple-500 font-semibold">02h40m</span>
            </p>
            <p>
              Target LV:
              <span className="ml-2 text-orange-500 font-semibold">1</span>
            </p>
            <p className="text-right">
              Salary:
              <span className="ml-2 text-orange-500 font-semibold">$3</span>
            </p>
          </div>

          {/* TABLE HEADER */}
          <div className="grid grid-cols-3 text-center rounded-xl overflow-hidden font-semibold text-sm">
            <div className="bg-gray-100 py-2">Date</div>
            <div className="bg-gradient-to-r from-yellow-100 to-orange-200 py-2">
              Duration
            </div>
            <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white py-2">
              Target
            </div>
          </div>

          {/* TABLE ROWS */}
          {[
            { date: "2025-10-26", duration: "02h00m", target: "1" },
            { date: "2025-10-17", duration: "00h10m", target: "0" },
            { date: "2025-10-13", duration: "00h30m", target: "0" },
            { date: "2025-10-06", duration: "0s", target: "32004" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-3 text-center text-sm">
              <div className="py-3">{row.date}</div>
              <div className="py-3 bg-orange-50">{row.duration}</div>
              <div className="py-3 bg-emerald-50 text-emerald-700 font-semibold">
                {row.target}
              </div>
            </div>
          ))}

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="mt-4 w-full py-3 rounded-xl bg-gray-100 font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
