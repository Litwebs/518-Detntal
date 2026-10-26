export interface OpeningHours {
  day: string;
  time: string;
  lunch?: string;
}

export const openingHours: OpeningHours[] = [
  { day: "Monday", time: "9:00am – 5:30pm", lunch: "1:00pm – 2:00pm" },
  { day: "Tuesday", time: "9:00am – 5:30pm", lunch: "1:00pm – 2:00pm" },
  { day: "Wednesday", time: "9:00am – 8:00pm", lunch: "2:00pm – 3:00pm" },
  { day: "Thursday", time: "9:00am – 5:30pm", lunch: "1:00pm – 2:00pm" },
  { day: "Friday", time: "8:00am – 12:30pm" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export const lunchClosureNotice =
  "The practice and phone lines are closed during lunch. Please call outside these times.";
