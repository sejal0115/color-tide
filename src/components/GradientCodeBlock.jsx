import { useState } from 'react';

export default function GradientCodeBlock({ color1, color2, direction }) {
  const css = `background: linear-gradient(${direction}, ${color1}, ${color2});`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black text-success p-4 rounded-4 w-100" style={{ maxWidth: "720px" }}>
      <code className="d-block mb-3">{css}</code>
      <button
        onClick={handleCopy}
        className="btn btn-primary"
      >
        {copied ? "✅ Copied!" : "📋 Copy CSS"}
      </button>
    </div>
  );
}
