import { useState } from 'react';
import { FaSyncAlt, FaCode, FaDownload, FaPlus } from 'react-icons/fa';
import { toast } from "react-toastify";
import TooltipWrapper from './common/TooltipWrapper';

const directions = [
    'to right', 'to left', 'to bottom', 'to top',
    'to bottom right', 'to bottom left', 'to top right', 'to top left'
];
const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    toast.success(`Copied ${hex} to clipboard`);
};

export default function GradientToolbar({
    color1, setColor1,
    color2, setColor2,
    direction, setDirection,
    onRotate,
    onDownload,
    onCopyCSS
}) {
    return (
        <div className="bg-light d-flex flex-wrap gap-2 justify-content-end pe-3 py-1 w-100">
         {/* <div className="bg-light d-flex gap-2 pe-3 ps-3 py-1 w-100"> */}
            {/* Color 1 */}
            <div className="d-flex align-items-center gap-2 hex_code">
                <input
                    type="color"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    className="border-0 form-control color_box"
                />
                <TooltipWrapper>
                    <span
                        className="fw-semibold"
                        role="button"
                        onClick={() => handleCopy(color1)}
                        title="Click to copy"
                    >
                        {color1}
                    </span>
                </TooltipWrapper>
            </div>

            {/* Color 2 */}
            <div className="d-flex align-items-center gap-2 hex_code">
                <input
                    type="color"
                    value={color2}
                    onChange={(e) => setColor2(e.target.value)}
                    className="border-0 form-control color_box"
                />
                <TooltipWrapper>
                    <span
                        className="fw-semibold"
                        role="button"
                        onClick={() => handleCopy(color2)}
                        title="Click to copy"
                    >
                        {color2}
                    </span>
                </TooltipWrapper>
            </div>


            {/* Direction Selector */}
            <select
                id="select_box"
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                className="custom-select-enhanced"
            >
                {directions.map((dir) => (
                    <option key={dir} value={dir}>{dir}</option>
                ))}
            </select>

            {/* Copy CSS */}
            <TooltipWrapper>
                <button onClick={onCopyCSS} className="btn shadow-lg" title="Copy CSS">
                    <FaCode />
                </button>
            </TooltipWrapper>
            {/* Download */}
            <TooltipWrapper>
                <button onClick={onDownload} className="shadow-lg btn" title="Download JPG">
                    <FaDownload />
                </button>
            </TooltipWrapper>

        </div>
    );
}
