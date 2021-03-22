import { Event } from './event';

export interface Day {
    index: number;
    dayMillis: number;
    isWeekend: boolean;
    events: Array<Event>;
}
