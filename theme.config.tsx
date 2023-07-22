import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>CAEC</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Manual do Calouro, CAEC",
  },
  banner: {
    key: "CAEC",
    text: "CAEC",
  },
  editLink: {
    text: "Edite esta página no GitHub",
  },
  //faviconGlyph: '✦',
};

export default config;
