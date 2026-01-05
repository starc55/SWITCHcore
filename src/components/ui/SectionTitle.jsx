import React from "react";
import "@/styles/ui/sectionTitle.css";
import { useTranslation } from "react-i18next";

const SectionTitle = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div>
      <p className="section-title">{t(title)}</p>
    </div>
  );
};

export default SectionTitle;
