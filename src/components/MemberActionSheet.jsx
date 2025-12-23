import { useNavigate } from "react-router-dom";

export default function MemberActionSheet({ open, onClose, memberId }) {
  const navigate = useNavigate();

  if (!open) return null;

  const goToDetail = () => {
    onClose();
    navigate(`/teammate/${memberId}`);
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40"
      />

      {/* BOTTOM SHEET */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
        <div className="w-full max-w-[390px] bg-white rounded-t-2xl pb-4 animate-slideUp">

          {/* MEMBER DETAILS */}
          <button
            onClick={goToDetail}
            className="w-full py-4 text-center text-lg font-medium"
          >
            Member Details
          </button>

          <div className="border-t" />

          {/* CANCEL */}
          <button
            onClick={onClose}
            className="w-full py-4 text-center text-gray-500 text-base"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
