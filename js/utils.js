const convertTimeStamp = (timeStamp, timezone) => {
  const convertTimezone = timezone / 3600;
  const date = new Date(timeStamp * 1000);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timezone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
      convertTimezone
    )}`,
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
};

function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  console.log(regionNames.of(country));
  return regionNames.of(country);
}

export { convertTimeStamp, convertCountryCode };
