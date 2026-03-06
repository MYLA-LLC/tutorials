import type { ReactNode } from "react";

import { useLocation } from "@docusaurus/router";
import OriginalDocsVersionDropdownNavbarItem from "@theme-original/NavbarItem/DocsVersionDropdownNavbarItem";
import type { Props } from "@theme/NavbarItem/DocsVersionDropdownNavbarItem";

export default function DocsVersionDropdownNavbarItem(props: Props): ReactNode {
  const { pathname } = useLocation();
  const { docsPluginId } = props;
  const routeToken = `/docs/${docsPluginId}`;
  if (!pathname.includes(routeToken)) return null;
  return <OriginalDocsVersionDropdownNavbarItem {...props} />;
}
