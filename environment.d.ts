declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string;
			STRAPI_ADDRESS: string;
			STRAPI_API_TOKEN: string;
		}
	}
}

export {};
