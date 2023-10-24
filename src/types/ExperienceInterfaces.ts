import { Institution } from '.';

export interface Experiences {
	data: Experience[];
}

export interface Experience extends ExperienceIdentification, ExperienceAttributes {}

export interface ExperienceIdentification {
	id: string;
}

export interface ExperienceAttributes {
	attributes: Partial<ExperienceFields> & Pick<ExperienceFields, 'role' | 'start_date'>;
}

export interface ExperienceFields {
	role: string;
	institution?: {
		data: Institution;
	};
	start_date: Date;
	end_date?: Date;
	short_desc?: string;
	desc?: string;
}
