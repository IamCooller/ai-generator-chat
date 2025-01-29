import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(["development", "test", "production"]),

		NEXT_PUBLIC_URL_BASE: z.string(),
	},
	client: {
		NEXT_PUBLIC_URL_BASE: z.string(),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_URL_BASE: process.env.NEXT_PUBLIC_URL_BASE,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
