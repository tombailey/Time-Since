declare module "time-since" {
  export interface timeSince {
    since: {
      millis: number;
      secs: number;
      mins: number;
      hours: number;
      days: number;
      weeks: number;
    };
  }
}
