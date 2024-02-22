// ./src/components/Navigation.tsx

import { Client, Content, isFilled } from "@prismicio/client";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

export const Navigation = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const navigation = await client.getSingle("navigation");

  return (
    <nav className="font-bold text-xl self-center">
      <ul>
        {isFilled.group(navigation.data.menu_items) &&
          navigation.data.menu_items.map((item) => {
            return (
              <li >
                <PrismicLink field={item.link}><PrismicRichText field={item.label} /></PrismicLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};