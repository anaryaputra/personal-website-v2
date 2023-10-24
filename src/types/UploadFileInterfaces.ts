export interface UploadFileEntityResponse {
	data: UploadFileEntity;
}

export interface UploadFileEntity {
	id: string;
	attributes: UploadFile;
}

export interface UploadFile {
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	format: JSON;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string;
	provider: string;
	provider_metadata: JSON;
	createdAt: Date;
	updatedAt: Date;
}
