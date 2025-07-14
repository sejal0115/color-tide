import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
export default function GradientPreview({ color1, color2, direction, name, onPrev, onNext }) {
  return (
    <div
      id="gradient-preview"
      style={{
        background: `linear-gradient(${direction}, ${color1}, ${color2})`,
        height: "90vh",
        width: "100vw",
        transition: "background 0.5s ease-in-out",
        position: "relative",
      }}
      className="gradient-preview-container fade-in text-white d-flex align-items-center justify-content-center"
    >
      {/* Title */}
      <h2 className="preview-ui-element fs-5 mt-3 position-absolute start-50 top-0 translate-middle-x">
        {name}
      </h2>

      {/* Arrows */}
      <button
        onClick={onPrev}
        className="preview-ui-element carousel-arrow start"
      >
        <SlArrowLeft size={24} />
      </button>

      <button
        onClick={onNext}
        className="preview-ui-element carousel-arrow end"
      >
        <SlArrowRight size={24} />
      </button>


    </div>
  );
}
