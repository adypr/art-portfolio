import {resolve} from 'path';
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default {
    root: 'src',
    plugins: [
        ViteEjsPlugin(), 
    ],
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
               main: resolve(__dirname, 'src/index.html'),
               about:  resolve(__dirname, 'src/about.html')
            }
        }
    }
}