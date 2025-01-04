import Translator from "./components/translator";
import TranslatorApp from "./components/translator-app";
function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#b6f492] to-[#338b93] flex items-center justify-center">
      <div className="w-[90%] max-w-lg bg-[#2d2d2d] rounded-xl shadow-lg p-8 shasdow-2xl shadow-gray-800 flex flex-col">
        {/* <Translator /> */}
        <TranslatorApp />
      </div>
    </div>
  );
}

export default App;
