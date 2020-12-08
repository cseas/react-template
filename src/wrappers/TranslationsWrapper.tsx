import { ReactNode } from "react";
import { TranslateButtons } from "../translations";
import "../translations/i18n";

type TranslationsWrapperProps = { children?: ReactNode };

export function TranslationsWrapper(props: TranslationsWrapperProps) {
  return (
    <>
      {props.children}
      <TranslateButtons />
    </>
  );
}
