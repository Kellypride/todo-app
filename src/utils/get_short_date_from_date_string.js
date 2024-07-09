export const getShortDateFromDateString = (dateString) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log(String(dateString));
  const monthIndex = new Date(dateString).getMonth();
  if (monthIndex < 1 || monthIndex > 12) {
    throw Error("Invalid date object");
  }
  const date = new Date(dateString).getDate();
  return `${date} ${months[monthIndex]}`;
};
