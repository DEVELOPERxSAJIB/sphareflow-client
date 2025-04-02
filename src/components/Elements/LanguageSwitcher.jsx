import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";
import Cookies from "js-cookie";

const languages = [
  { value: 'en', label: 'English', countryCode: 'US' },
  { value: 'fr', label: 'French', countryCode: 'FR' },
  { value: 'es', label: 'Spanish', countryCode: 'ES' },
  { value: 'de', label: 'German', countryCode: 'DE' },
  { value: 'zh', label: 'Chinese', countryCode: 'CN' },
];

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    Cookies.get('lang')
    ? languages.find(
        (lang) => lang.value === Cookies.get('lang')?.toLocaleLowerCase(),
      ) || languages[0]
    : languages[0],
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    setSelectedLang(language.value.toUpperCase());
    console.log("Language changed to:", language.value);
  };

  const setSelectedLang = () => {
    window.dispatchEvent(new CustomEvent("langChange"));
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-[120px] gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none ring-0"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <ReactCountryFlag
          countryCode={selectedLanguage.countryCode}
          svg
          style={{ width: "20px", height: "20px" }}
          aria-label={selectedLanguage.label}
        />
        <span className="text-sm">{selectedLanguage.label}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
        <div
          className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg"
          role="menu"
        >
          {languages.map((language) => (
            <div
              key={language.value}
              onClick={() => handleLanguageChange(language)}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
              role="menuitem"
            >
              <ReactCountryFlag
                countryCode={language.countryCode}
                svg
                style={{ width: "20px", height: "20px" }}
                aria-label={language.label}
              />
              <span className="text-sm">{language.label}</span>
            </div>
          ))}
        </div>

        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
