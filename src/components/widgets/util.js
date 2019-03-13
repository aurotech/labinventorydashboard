export function dateCreator(timestamp) {
  let tempDate = new Date(timestamp);

  return (
    ("0" + tempDate.getDate()).slice(-2) +
    "/" +
    ("0" + (tempDate.getMonth() + 1)).slice(-2) +
    "/" +
    tempDate.getFullYear()
  );
}
