type LinkButtonProps = {
  title: string;
  url: string;
};

export default function LinkButton({ title, url }: LinkButtonProps) {
  return <a href={url}>{title}</a>;
}
