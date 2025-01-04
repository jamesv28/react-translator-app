import PropTypes from "prop-types";
const Translator = ({ onStart }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-12">
      <div className="w-full h-64 bg-gradient-to-l from-[#b6f492] to-[#338b93] rounded-t-full rounded-bl-full flex flex-col justify-center text-gray-700 pr-6">
        <span className="font-manrope text-6xl text-center">hello</span>
        <span className="font-3xl text-center ">hola</span>
        <span className="font-notoSansJP font-4xl text-right">こんにちは</span>
        <span className="font-2xl text-right">Ciao</span>
      </div>
      <div className="w-full text-right space-y-5 mt-20 mb-36 ">
        <h1 className="font-manrope text-4xl text-white ">Translator App</h1>
        <button
          onClick={onStart}
          className="w-32 h-10 bg-gradient-to-r from-[#b6f492] to-[#338b93] font-bold text-lg text-uppercase text-gray-700 tracking-widest rounded-full active:translate-y-[1px]"
        >
          Start
        </button>
      </div>
    </div>
  );
};

Translator.propTypes = {
  onStart: PropTypes.func.isRequired,
};
export default Translator;
