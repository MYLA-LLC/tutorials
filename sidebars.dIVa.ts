import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  dIVaSidebar: [
    "dashboard",
    "in-game-overlay",
    {
      type: "category",
      label: "Features",
      items: ["characters", "meters", "meter-log-and-history", "speed-leveling-tracker", "offline-mode", "instance-alert"],
    },
    {
      type: "category",
      label: "Settings",
      link: { type: "doc", id: "settings" },
      items: ["key-bindings", "manage-data"],
    },
    {
      type: "html",
      value: '<div class="sidebar-section-separator"><span class="separator-text">Games</span></div>',
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Diablo IV",
      items: ["dungeons", "sigils"],
    },
    {
      type: "category",
      label: "Path of Exile 2",
      items: ["class-detection"],
    },
  ],
};

export default sidebars;
