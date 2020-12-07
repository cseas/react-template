import { useTranslation } from "react-i18next";

export function TranslateButtons() {
  const { i18n } = useTranslation();

  function changeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  return (
    <div>
      <button onClick={() => changeLanguage("de")}>DE</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}
