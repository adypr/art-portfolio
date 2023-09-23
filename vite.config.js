import {resolve} from 'path';
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default {
    plugins: [
        ViteEjsPlugin(), 
    ],
    build: {
        rollupOptions: {
            input: {
               main: resolve(__dirname, 'index.html'),
               about:  resolve(__dirname, 'about.html')
            }
        }
    }
}