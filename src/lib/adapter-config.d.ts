// This file extends the AdapterConfig type from "@types/iobroker"

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
	namespace ioBroker {
		interface AdapterConfig {
			refresh_time_in_seconds: number;
			api_key: string;
		}
	}
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export {};