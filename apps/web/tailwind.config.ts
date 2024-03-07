// tailwind config is required for editor support

import sharedConfig from "@muse/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // h/t to https://www.willliu.com/blog/Why-your-Tailwind-styles-aren-t-working-in-your-Turborepo
    "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
  ],
  presets: [sharedConfig],
};

export default config;
