import { useState, useRef, cloneElement } from 'react';
import '../../assets/Css/Tooltip.css';

export default function TooltipWrapper({ children }) {
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  const handleMouseEnter = (e, title) => {
    if (!title) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      text: title,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const title = children.props.title;

  const clonedChild = cloneElement(children, {
    onMouseEnter: (e) => handleMouseEnter(e, title),
    onMouseLeave: handleMouseLeave,
    title: undefined, // remove native tooltip
  });

  return (
    <>
      {clonedChild}
      {tooltip.visible && (
        <div
          className="custom-tooltip"
          style={{
            top: tooltip.y + window.scrollY,
            left: tooltip.x + window.scrollX,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
}
