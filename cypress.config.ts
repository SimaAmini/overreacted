import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // baseUrl: "https://jsonplaceholder.typicode.com/",
    BASE_URL: "http://localhost:3000/",
  },
});
