import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();
  const [ping, setPing] = useState<string>("");

  useEffect(() => {
    axios.get("/ping").then((response) => setPing(response.data));
  });

  return (
    <>
      <h2>Translations</h2>
      <p>{t("title")}</p>
      <h2>Axios</h2>
      <p>ping: {ping}</p>
    </>
  );
}
