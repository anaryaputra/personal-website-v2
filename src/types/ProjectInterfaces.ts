import { Institution, Teches, UploadFileEntityResponse } from '.';

export interface Projects {
	data: Project[];
}

export interface Project extends ProjectIdentification, ProjectAttributes {}

export interface ProjectIdentification {
	id: string;
}

export interface ProjectAttributes {
	attributes: Partial<ProjectFields> & Pick<ProjectFields, 'title' | 'type' | 'url' | 'thumbnail'>;
}

export interface ProjectFields {
	title: string;
	type: ProjectTypes;
	institution?: {
		data: Institution;
	};
	featured?: string;
	url: string;
	thumbnail: UploadFileEntityResponse;
	teches?: Teches;
	short_desc?: string;
}

export type ProjectTypes = 'collaborative' | 'solo';
