import calendarEventsJson from './calendar-events.json' with { type: 'json' };

export type CalendarPillVariant = 'strawberry-moon' | 'sparky-yellow' | 'touched-grass';

export type CalendarBadge =
	| { kind: 'pill'; text: string; variant: CalendarPillVariant }
	| { kind: 'speaker-session'; text: string };

export type CalendarPersonPhoto = {
	name: string;
	photoSrc: string;
};

export type CalendarEvent = {
	month: string;
	day: string;
	category: 'workshop' | 'speaker-session';
	title: string;
	bodyHtml: string;
	personPhotos: CalendarPersonPhoto[];
	badges: CalendarBadge[];
	registerUrl?: string;
};

export const calendarEvents = calendarEventsJson.events as CalendarEvent[];
