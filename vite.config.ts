import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";

export default defineConfig({
  plugins: [
    devtools({
      /* additional options */
      autoname: true, // e.g. enable autoname
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  optimizeDeps: {
    extensions: ["jsx"],
  },
  base: "/retro-board/",
});
