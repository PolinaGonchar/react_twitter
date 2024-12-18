export const getDate = (time) => {
    const date = new Date(time);

    const day = date.getDate().toString().padStart(2, "0");
    const month = date.getMonth().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const formattedDate = `${day}.${month} ${hours}:${minutes}`;

    return formattedDate;
  };