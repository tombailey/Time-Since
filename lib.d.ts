declare module "time-since" {
  export function since (timestamp: Date): {
    "millis": ()=>number,
    "secs": ()=>number,
    "mins": ()=>number,
    "hours": ()=>number,
    "days": ()=>number,
    "weeks": ()=>number,
}
}