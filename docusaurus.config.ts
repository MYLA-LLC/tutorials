import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "MYLA Tutorials",
  tagline: "Tutorials for MYLA Applications",
  favicon: "images/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://myla-llc.github.io",
  baseUrl: "/",
  organizationName: "myla-llc",
  projectName: "tutorials",
  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dIVa",
        path: "docs/dIVa",
        routeBasePath: "docs/dIVa",
        sidebarPath: "./sidebars.dIVa.ts",
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Tutorials",
      logo: {
        alt: "MYLA LLC",
        src: "images/favicon.ico",
      },
      items: [
        {
          type: "doc",
          docId: "index",
          docsPluginId: "dIVa",
          position: "left",
          label: "dIVa",
        },
        {
          href: "https://github.com/myla-llc/tutorials",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "dIVa",
              to: "/docs/dIVa",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/myla-llc/tutorials",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MYLA LLC.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
