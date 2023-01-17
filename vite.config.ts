///<reference types="vitest"/>
///<reference types="vite/client"/>
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.vitest": "undefined", //打包时会把inline测试移除掉
  },
  test: {
    // includeSource: ["src/**/*/{jsx,tsx}"], //include all sources to see if any .js or .tsx files include tests inside of them
    coverage: {
      reporter: ["text", "html"],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
