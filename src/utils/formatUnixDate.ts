import { format as dateFormatFns } from "date-fns";

const formatUnixDate = (unixDate: number, format: string = "dd MMMM yyyy"): string => {
  const date: Date = new Date(unixDate * 1000);
  return dateFormatFns(date, format);
};

export default formatUnixDate;
