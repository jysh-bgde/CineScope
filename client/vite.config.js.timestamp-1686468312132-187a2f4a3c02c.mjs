// vite.config.js
import { defineConfig } from "file:///C:/Users/PRITAM/OneDrive/Desktop/JayeshBagde/recommenderSystem/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/PRITAM/OneDrive/Desktop/JayeshBagde/recommenderSystem/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 3e3,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQUklUQU1cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxKYXllc2hCYWdkZVxcXFxyZWNvbW1lbmRlclN5c3RlbVxcXFxjbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBSSVRBTVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEpheWVzaEJhZ2RlXFxcXHJlY29tbWVuZGVyU3lzdGVtXFxcXGNsaWVudFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUFJJVEFNL09uZURyaXZlL0Rlc2t0b3AvSmF5ZXNoQmFnZGUvcmVjb21tZW5kZXJTeXN0ZW0vY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAgICAgd3M6IHRydWUsXG4gICAgICAgIFxuICAgICAgfVxuICAgIH0sXG4gICBcbiAgICBcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVosU0FBUyxvQkFBb0I7QUFDOWEsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsUUFDUixJQUFJO0FBQUEsTUFFTjtBQUFBLElBQ0Y7QUFBQSxFQUdGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
