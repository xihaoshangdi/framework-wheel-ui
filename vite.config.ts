import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
// https://vitejs.dev/config/
export default {
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
}