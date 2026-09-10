import { availableLinks } from "@/app/data/availableLinks";

type LinkItemProps = {
  platform: string;
  url: string;
  onDelete: () => void;
};

export default function LinkItem({ platform, url, onDelete }: LinkItemProps) {
  const platformData = availableLinks.find((link) => link.id === platform);

  return (
    <div>
      <h3>{platformData?.name}</h3>

      <p>{url}</p>

      <button onClick={onDelete}>Löschen</button>
    </div>
  );
}
