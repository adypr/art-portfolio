import {resolve} from 'path';
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default {
    server: {
        open: 'layouts/pages/main/index.html'
    },
    root: 'src',
    plugins: [
        ViteEjsPlugin(), 
    ],
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
               main: resolve(__dirname, 'src/layouts/pages/main/index.html')
            }
        }
    }
}