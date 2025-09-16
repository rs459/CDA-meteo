export default function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const date = new Date(dateString);
  return date.toLocaleString("fr-FR", options);
}
