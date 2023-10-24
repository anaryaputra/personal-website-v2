import { UploadFileEntityResponse } from '.';

export interface Institutions {
	data: Institution[];
}

export interface Institution extends InstitutionIdentification, InstitutionAttributes {}

export interface InstitutionIdentification {
	id: string;
}

export interface InstitutionAttributes {
	attributes: Partial<InstitutionFields> & Pick<InstitutionFields, 'name'>;
}

export interface InstitutionFields {
	name: string;
	logo?: UploadFileEntityResponse;
}
