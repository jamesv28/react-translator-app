const TranslatorApp = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center px-6 sm:px-8 pt-12 pb-6 relative">
      <button className="absolute top-4 right-4">
        <i className="fa-solid fa-xmark text-xl text-gray-300"></i>
      </button>
      <div className="w-full min-h-20 flex justify-center items-center px-4 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-lg text-gray-700">
        <div className="language">English</div>
        <i className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"></i>
        <div className="language">Spanish</div>
      </div>
      <div className="w-full relative">
        <textarea className="textarea" name="" id=""></textarea>
        <div className="absolute bottom-2 right-4 text-gray-400">0/ 200</div>
      </div>
      <button className="w-12 h-12 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full text-2xl text-gray-700 flex justify-center items-center active:translate-y-[2px]">
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div className="w-full">
        <textarea className="textarea" name="" id=""></textarea>
      </div>
    </div>
  );
};

export default TranslatorApp;
