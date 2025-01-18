import type { UserConfig } from "vite";
import relay from "vite-plugin-relay";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default {
  plugins: [
    relay,
    react({
      babel: {
        plugins: ["relay"],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
} satisfies UserConfig;
