import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
  { code: "ar", lang: "Arabic" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLangauge = (lng) => {
    i18n.changeLanguage(lng);
  };

  // for right to left languages like arabic
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="btn-container">
      {languages?.map((lng) => (
        <button
          className={lng.code === i18n.language ? "selected" : ""}
          key={lng.code}
          onClick={() => changeLangauge(lng.code)}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
