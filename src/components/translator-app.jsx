import { useState } from "react";
import PropTypes from "prop-types";
import { languages } from "../languages";

const TranslatorApp = ({ onClose }) => {
  const [selectedLanguageTo, setSelectedLanguageTo] = useState("en");
  const [selectedLanguageFrom, setSelectedLanguageFrom] = useState("en");
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguageSelection, setCurrentLanguageSelection] =
    useState(null);
  const [inputText, setInputText] = useState("");
  const [translateText, setTranslateText] = useState("");

  const handleLanguageClick = (type) => {
    setCurrentLanguageSelection(type);
    setShowLanguages(true);
  };

  const handleLanguages = (languageCode) => {
    if (currentLanguageSelection === "from") {
      setSelectedLanguageFrom(languageCode);
    } else {
      setSelectedLanguageTo(languageCode);
    }
    setShowLanguages(false);
  };

  const handleSwapLanguages = () => {
    const temp = selectedLanguageFrom;
    setSelectedLanguageFrom(selectedLanguageTo);
    setSelectedLanguageTo(temp);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setInputText(value);
    }
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setTranslateText("");
      return;
    }
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        inputText
      )}!&langpair=${selectedLanguageFrom}|${selectedLanguageTo}`
    );

    const data = await res.json();
    setTranslateText(data.responseData.translatedText);
  };
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center px-6 sm:px-8 pt-12 pb-6 relative">
      <button className="absolute top-4 right-4" onClick={onClose}>
        <i className="fa-solid fa-xmark text-xl text-gray-300"></i>
      </button>
      <div className="w-full min-h-20 flex justify-center items-center px-4 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-lg text-gray-700">
        <div className="language" onClick={() => handleLanguageClick("from")}>
          {languages[selectedLanguageFrom] || "English"}
        </div>
        <i
          className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"
          onClick={handleSwapLanguages}
        ></i>
        <div className="language" onClick={() => handleLanguageClick("to")}>
          {languages[selectedLanguageTo] || "Spanish"}
        </div>
      </div>
      {showLanguages && (
        <div className="w-[calc(100%-4rem)] h-[calc(100%-9rem)] bg-gradient-to-r from-[#b6f492] to-[#338b93] absolute top-32 left-8 z-10 rounded shadow-lg p-4 overflow-y-scroll scrollbar-hide">
          <ul className="overflow-y-scroll ">
            {Object.entries(languages).map(([key, value]) => (
              <li
                className="cursor-pointer hover:bg-[#10646b] transition hover:text-white duration-200 p-2 rounded"
                key={key}
                onClick={() => handleLanguages(key)}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="w-full relative">
        <textarea
          className="textarea"
          value={inputText || ""}
          onChange={handleInputChange}
        ></textarea>
        <div className="absolute bottom-2 right-4 text-gray-400">
          {inputText.length}/ 200
        </div>
      </div>
      <button
        onClick={handleTranslate}
        className="w-12 h-12 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full text-2xl text-gray-700 flex justify-center items-center active:translate-y-[2px]"
      >
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div className="w-full">
        <textarea
          value={translateText || ""}
          className="textarea"
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

TranslatorApp.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default TranslatorApp;
