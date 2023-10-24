import { UploadFileEntityResponse } from '.';

export interface Specializations {
	data: Specialization[];
}

export interface Specialization extends SpecializationIdentification, SpecializationAttributes {}

export interface SpecializationIdentification {
	id: string;
}

export interface SpecializationAttributes {
	attributes: Partial<SpecializationFields> & Pick<SpecializationFields, 'name' | 'description' | 'icon'>;
}

export interface SpecializationFields {
	name: string;
	description: string;
	highlighted_name?: string;
	icon: UploadFileEntityResponse;
}
