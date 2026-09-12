import { availableLinks } from "@/data/availableLinks";

type LinkItemProps = {
  platform: string;
  url: string;
  onDelete?: () => void;
  onEdit?: () => void;
};

export default function LinkItem({
  platform,
  url,
  onDelete,
  onEdit,
}: LinkItemProps) {
  const platformData = availableLinks.find((link) => link.id === platform);

  return (
    <div className="flex flex-col">
      <h3>{platformData?.name}</h3>

      <p>{url}</p>

      <div className="flex gap-4">
        {onDelete && <button onClick={onDelete}>Löschen</button>}

        {onEdit && <button onClick={onEdit}>Bearbeiten</button>}
      </div>
    </div>
  );
}
