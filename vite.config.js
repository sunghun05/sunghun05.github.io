import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  // base: '/repo-name/', // TODO: Update this to match your GitHub repository name if deploying to a project page
})
