import { useNavigate } from "react-router-dom";

export default function PageHeader({ title }) {
  const navigate = useNavigate();

  return (
    <header
      className="
        h-14
        bg-gradient-to-b from-indigo-950 to-indigo-900
        text-white
        flex
        items-center
        justify-center
        relative
      "
    >
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="absolute left-4 text-xl active:opacity-70"
      >
        ‹
      </button>

      {/* TITLE */}
      <h1 className="text-base font-semibold tracking-wide">
        {title}
      </h1>

      {/* CLOSE */}
      <button
        onClick={() => navigate(-1)}
        className="absolute right-4 text-xl active:opacity-70"
      >
        ✕
      </button>
    </header>
  );
}
