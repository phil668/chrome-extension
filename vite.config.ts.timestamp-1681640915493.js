// vite.config.ts
import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import vue from "@vitejs/plugin-vue";

// src/manifest.ts
import { defineManifest } from "@crxjs/vite-plugin";
var manifest_default = defineManifest({
  name: "create-chrome-ext",
  description: "",
  version: "0.0.0",
  manifest_version: 3,
  icons: {
    16: "img/logo-16.png",
    32: "img/logo-34.png",
    48: "img/logo-48.png",
    128: "img/logo-128.png"
  },
  action: {
    default_popup: "popup.html",
    default_icon: "img/logo-48.png"
  },
  options_page: "options.html",
  background: {
    service_worker: "src/background/index.ts",
    type: "module"
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*"],
      js: ["src/content/index.ts"]
    }
  ],
  web_accessible_resources: [
    {
      resources: ["img/logo-16.png", "img/logo-34.png", "img/logo-48.png", "img/logo-128.png"],
      matches: []
    }
  ],
  permissions: []
});

// vite.config.ts
var vite_config_default = defineConfig(({ mode }) => {
  const production = mode === "production";
  return {
    build: {
      emptyOutDir: true,
      outDir: "build",
      rollupOptions: {
        output: {
          chunkFileNames: "assets/chunk-[hash].js"
        }
      }
    },
    plugins: [crx({ manifest: manifest_default }), vue()]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL21hbmlmZXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgY3J4IH0gZnJvbSAnQGNyeGpzL3ZpdGUtcGx1Z2luJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgbWFuaWZlc3QgZnJvbSAnLi9zcmMvbWFuaWZlc3QnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IHByb2R1Y3Rpb24gPSBtb2RlID09PSAncHJvZHVjdGlvbidcblxuICByZXR1cm4ge1xuICAgIGJ1aWxkOiB7XG4gICAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICAgIG91dERpcjogJ2J1aWxkJyxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvY2h1bmstW2hhc2hdLmpzJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbY3J4KHsgbWFuaWZlc3QgfSksIHZ1ZSgpXSxcbiAgfVxufSlcbiIsICJpbXBvcnQgeyBkZWZpbmVNYW5pZmVzdCB9IGZyb20gJ0Bjcnhqcy92aXRlLXBsdWdpbidcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lTWFuaWZlc3Qoe1xuICBuYW1lOiAnY3JlYXRlLWNocm9tZS1leHQnLFxuICBkZXNjcmlwdGlvbjogJycsXG4gIHZlcnNpb246ICcwLjAuMCcsXG4gIG1hbmlmZXN0X3ZlcnNpb246IDMsXG4gIGljb25zOiB7XG4gICAgMTY6ICdpbWcvbG9nby0xNi5wbmcnLFxuICAgIDMyOiAnaW1nL2xvZ28tMzQucG5nJyxcbiAgICA0ODogJ2ltZy9sb2dvLTQ4LnBuZycsXG4gICAgMTI4OiAnaW1nL2xvZ28tMTI4LnBuZycsXG4gIH0sXG4gIGFjdGlvbjoge1xuICAgIGRlZmF1bHRfcG9wdXA6ICdwb3B1cC5odG1sJyxcbiAgICBkZWZhdWx0X2ljb246ICdpbWcvbG9nby00OC5wbmcnLFxuICB9LFxuICBvcHRpb25zX3BhZ2U6ICdvcHRpb25zLmh0bWwnLFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgc2VydmljZV93b3JrZXI6ICdzcmMvYmFja2dyb3VuZC9pbmRleC50cycsXG4gICAgdHlwZTogJ21vZHVsZScsXG4gIH0sXG4gIGNvbnRlbnRfc2NyaXB0czogW1xuICAgIHtcbiAgICAgIG1hdGNoZXM6IFsnaHR0cDovLyovKicsICdodHRwczovLyovKiddLFxuICAgICAganM6IFsnc3JjL2NvbnRlbnQvaW5kZXgudHMnXSxcbiAgICB9LFxuICBdLFxuICB3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXM6IFtcbiAgICB7XG4gICAgICByZXNvdXJjZXM6IFsnaW1nL2xvZ28tMTYucG5nJywgJ2ltZy9sb2dvLTM0LnBuZycsICdpbWcvbG9nby00OC5wbmcnLCAnaW1nL2xvZ28tMTI4LnBuZyddLFxuICAgICAgbWF0Y2hlczogW10sXG4gICAgfSxcbiAgXSxcbiAgcGVybWlzc2lvbnM6IFtdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLFdBQVc7QUFDcEIsT0FBTyxTQUFTOzs7QUNGaEIsU0FBUyxzQkFBc0I7QUFFL0IsSUFBTyxtQkFBUSxlQUFlO0FBQUEsRUFDNUIsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1Qsa0JBQWtCO0FBQUEsRUFDbEIsT0FBTztBQUFBLElBQ0wsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGVBQWU7QUFBQSxJQUNmLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLElBQ1YsZ0JBQWdCO0FBQUEsSUFDaEIsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGlCQUFpQjtBQUFBLElBQ2Y7QUFBQSxNQUNFLFNBQVMsQ0FBQyxjQUFjLGFBQWE7QUFBQSxNQUNyQyxJQUFJLENBQUMsc0JBQXNCO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBQUEsRUFDQSwwQkFBMEI7QUFBQSxJQUN4QjtBQUFBLE1BQ0UsV0FBVyxDQUFDLG1CQUFtQixtQkFBbUIsbUJBQW1CLGtCQUFrQjtBQUFBLE1BQ3ZGLFNBQVMsQ0FBQztBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFhLENBQUM7QUFDaEIsQ0FBQzs7O0FEN0JELElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sYUFBYSxTQUFTO0FBRTVCLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxVQUNOLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVMsQ0FBQyxJQUFJLEVBQUUsMkJBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUFBLEVBQ3BDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
