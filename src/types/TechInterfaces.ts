import { UploadFileEntityResponse } from '.';

export interface Teches {
	data: Tech[];
}

export interface Tech extends TechIdentification, TechAttributes {}

export interface TechIdentification {
	id: string;
}

export interface TechAttributes {
	attributes: Partial<TechFields> & Pick<TechFields, 'name' | 'logo'>;
}

export interface TechFields {
	name: string;
	logo: UploadFileEntityResponse;
}
