import LinkButton from "@/components/LinkButton";
import { mockUserLinks } from "../data/mockUserLinks";
import { availableLinks } from "../data/availableLinks";

export default function ProfilePage() {
  return (
    <main>
      <h1>Tim</h1>

      {mockUserLinks.map((link) => {
        const platform = availableLinks.find(
          (item) => item.id === link.platform,
        );

        if (!platform) return null;

        return (
          <LinkButton
            key={link.platform}
            title={platform.name}
            url={link.url}
          />
        );
      })}
    </main>
  );
}
