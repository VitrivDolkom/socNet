import path from "path";
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@pages": path.resolve(__dirname, "./src/pages"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                @import "./src/styles/_vars.scss";
                `,
            },

        },
        modules: {
            localsConvention: "camelCase",
        }
    },
})
