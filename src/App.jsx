import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import { LanguageSelector } from "./components";

function App() {
  const { t } = useTranslation();

  const { line1, line2 } = t("description");

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
        <Trans
          i18nKey={line1}
          values={{
            name: "Abhisek Dubey",
          }}
          components={{
            1: <b></b>,
          }}
          // i18nKey={"description.line1"}
        />
      </span>
      {/* <p>{line1}</p>*/}
      <p>{line2}</p>
    </div>
  );
}

export default App;
