export function formatDate(dateInput) {
  const date = new Date(dateInput);

  return date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    })
    .replace(/(\d{2} \w{3}) (\d{4})/, "$1, $2"); 
}