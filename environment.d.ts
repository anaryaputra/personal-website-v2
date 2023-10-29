declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string;
			NEXT_PUBLIC_UMAMI_WEBSITE_ID: string;
			NEXT_PUBLIC_UMAMI_SHARE_ANALYTICS_URL: string;
			STRAPI_ADDRESS: string;
			STRAPI_API_TOKEN: string;
		}
	}
}

export {};
