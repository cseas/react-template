import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    axios.get("/ping").then((response) => console.log(response.data));
  });

  return (
    <>
      <h1>Translations</h1>
      <p>{t("title")}</p>
    </>
  );
}
