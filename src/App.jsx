import { useState, useEffect } from 'react';
import GradientPreview from './components/GradientPreview';
import GradientCodeBlock from './components/GradientCodeBlock';
import GradientNavbar from './components/GradientNavbar';
import Loader from './components/common/Loader';
import GradientToolbar from './components/GradientToolbar';
import html2canvas from 'html2canvas';
import { gradients } from "./data/gradients";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);
  // const [color1, setColor1] = useState('#051937');
  // const [color2, setColor2] = useState('#A8EB12');
  // const [color1, setColor1] = useState('#00C9FF'); // Sky Blue
  // const [color2, setColor2] = useState('#92FE9D'); // Mint Green
  // const [color1, setColor1] = useState('#FF6A00'); // Deep Orange
  // const [color2, setColor2] = useState('#FFB347'); // Soft Peach
  // const [color1, setColor1] = useState('#6a11cb'); // Royal Purple
  // const [color2, setColor2] = useState('#2575fc'); // Blue Gradient
  // const [color1, setColor1] = useState('#0f2027'); // Deep Navy
  // const [color2, setColor2] = useState('#2c5364'); // Cool Gray-Blue
  // const [color1, setColor1] = useState('#F857A6'); // Rose Pink
  // const [color2, setColor2] = useState('#FF5858'); // Coral Red

  // const gradientPresets = [
  //   ['#00C9FF', '#92FE9D'],
  //   ['#FF6A00', '#FFB347'],
  //   ['#6a11cb', '#2575fc'],
  //   ['#0f2027', '#2c5364'],
  //   ['#F857A6', '#FF5858'],
  // ];

  // const [color1, setColor1] = useState(gradientPresets[0][0]);
  // const [color2, setColor2] = useState(gradientPresets[0][1]);


  // const randomIndex = Math.floor(Math.random() * gradientPresets.length);
  // const [color1, setColor1] = useState(gradientPresets[randomIndex][0]);
  // const [color2, setColor2] = useState(gradientPresets[randomIndex][1]);
  const [color1, setColor1] = useState(gradients[0].colors[0]);
  const [color2, setColor2] = useState(gradients[0].colors[1]);
  const [direction, setDirection] = useState('to right');

  const [gradientIndex, setGradientIndex] = useState(0);


  const handleCopyCSS = () => {
    const css = `background: linear-gradient(${direction}, ${color1}, ${color2});`;
    navigator.clipboard.writeText(css);
    toast.success("Gradient CSS copied!");
  };

  const handleDownload = () => {
    const preview = document.getElementById("gradient-preview");
    const uiElements = preview.querySelectorAll('.preview-ui-element');
    uiElements.forEach(el => el.style.display = 'none');

    html2canvas(preview).then((canvas) => {
      const link = document.createElement("a");
      link.download = "gradient.jpg";
      link.href = canvas.toDataURL("image/jpeg");
      link.click();

      uiElements.forEach(el => el.style.display = '');

      toast.success("Downloaded as JPG!");
    });
  };


  const handlePrev = () => {
    const newIndex = (gradientIndex - 1 + gradients.length) % gradients.length;
    applyGradientByIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (gradientIndex + 1) % gradients.length;
    applyGradientByIndex(newIndex);
  };

  const applyGradientByIndex = (index) => {
    const gradient = gradients[index];
    setGradientIndex(index);
    setColor1(gradient.colors[0]);
    setColor2(gradient.colors[1] || gradient.colors[0]); // fallback for 1-color gradient
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900); // 1.5s for smooth UX
    // }, 155500); // 1.5s for smooth UX
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;


  return (
    <>
      <GradientNavbar />
      <main className="min-vh-100 p-0 padding_top">
        <GradientToolbar
          color1={color1}
          setColor1={setColor1}
          color2={color2}
          setColor2={setColor2}
          direction={direction}
          setDirection={setDirection}
          onCopyCSS={handleCopyCSS}
          onDownload={handleDownload}
        />

        <GradientPreview
          color1={color1}
          color2={color2}
          direction={direction}
          name={gradients[gradientIndex].name}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
      </main>
      <footer>Crafted with 💻 & ❤️ by Sejal — Stay productive!</footer>
    </>
  );
}

export default App;
