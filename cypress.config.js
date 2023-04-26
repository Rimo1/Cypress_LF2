import {defineConfig} from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import pkg from "@badeball/cypress-cucumber-preprocessor";
import pkg2 from "@badeball/cypress-cucumber-preprocessor/esbuild.js";


export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,ts,feature}",
    screenshotOnRunFailure: true,
    async setupNodeEvents(
        on, config
    ) {
      await pkg.addCucumberPreprocessorPlugin (on, config);
      on(
          "file:preprocessor",
          createBundler({
            plugins: [pkg2.createEsbuildPlugin(config)],
          })
      );
      return config;
    },
  },
});
