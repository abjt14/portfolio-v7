export function formatDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  };
  return new Date(date).toLocaleDateString("en-US", options);
}
