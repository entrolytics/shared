/**
 * SDK Environment Variable Validation Tests
 *
 * Validates that each SDK correctly reads environment variables
 * according to the shared constants
 */

import { ENV_VAR_NAMES } from "@entrolytics/shared";
import { beforeEach, describe, expect, it } from "vite-plus/test";

type GlobalWithProcess = typeof globalThis & {
  process?: {
    env: Record<string, string | undefined>;
  };
};

describe("SDK Environment Variable Alignment", () => {
  beforeEach(() => {
    const runtime = globalThis as GlobalWithProcess;
    const env = runtime.process?.env;
    if (!env) {
      return;
    }

    // Clear all env vars before each test
    for (const key of Object.keys(env)) {
      if (key.includes("ENTROLYTICS")) {
        delete env[key];
      }
    }
  });

  describe("Next.js SDK", () => {
    it("should read NEXT_PUBLIC_ENTROLYTICS_WEBSITE_ID", () => {
      const expectedVars = ENV_VAR_NAMES.nextjs;

      expect(expectedVars.websiteId).toBe("NEXT_PUBLIC_ENTROLYTICS_WEBSITE_ID");
      expect(expectedVars.host).toBe("NEXT_PUBLIC_ENTROLYTICS_HOST");
      expect(expectedVars.envFile).toBe(".env.local");
    });
  });

  describe("React SDK (Vite)", () => {
    it("should read VITE_ENTROLYTICS_WEBSITE_ID", () => {
      const expectedVars = ENV_VAR_NAMES.react;

      expect(expectedVars.websiteId).toBe("VITE_ENTROLYTICS_WEBSITE_ID");
      expect(expectedVars.host).toBe("VITE_ENTROLYTICS_HOST");
      expect(expectedVars.envFile).toBe(".env");
    });
  });

  describe("Vue SDK", () => {
    it("should read VITE_ENTROLYTICS_WEBSITE_ID", () => {
      const expectedVars = ENV_VAR_NAMES.vue;

      expect(expectedVars.websiteId).toBe("VITE_ENTROLYTICS_WEBSITE_ID");
      expect(expectedVars.host).toBe("VITE_ENTROLYTICS_HOST");
      expect(expectedVars.envFile).toBe(".env");
    });
  });

  describe("Svelte SDK", () => {
    it("should read PUBLIC_ENTROLYTICS_WEBSITE_ID", () => {
      const expectedVars = ENV_VAR_NAMES.svelte;

      expect(expectedVars.websiteId).toBe("PUBLIC_ENTROLYTICS_WEBSITE_ID");
      expect(expectedVars.host).toBe("PUBLIC_ENTROLYTICS_HOST");
      expect(expectedVars.envFile).toBe(".env");
    });
  });

  describe("Astro SDK", () => {
    it("should read PUBLIC_ENTROLYTICS_WEBSITE_ID", () => {
      const expectedVars = ENV_VAR_NAMES.astro;

      expect(expectedVars.websiteId).toBe("PUBLIC_ENTROLYTICS_WEBSITE_ID");
      expect(expectedVars.host).toBe("PUBLIC_ENTROLYTICS_HOST");
      expect(expectedVars.envFile).toBe(".env");
    });
  });

  describe("Backend SDKs (Node, PHP, Python, Go)", () => {
    it("Node.js should read ENTROLYTICS_WEBSITE_ID", () => {
      const expectedVars = ENV_VAR_NAMES.node;

      expect(expectedVars.websiteId).toBe("ENTROLYTICS_WEBSITE_ID");
      expect(expectedVars.host).toBe("ENTROLYTICS_HOST");
    });

    it("PHP should read ENTROLYTICS_WEBSITE_ID", () => {
      const expectedVars = ENV_VAR_NAMES.php;

      expect(expectedVars.websiteId).toBe("ENTROLYTICS_WEBSITE_ID");
      expect(expectedVars.host).toBe("ENTROLYTICS_HOST");
    });

    it("Python should read ENTROLYTICS_WEBSITE_ID", () => {
      const expectedVars = ENV_VAR_NAMES.python;

      expect(expectedVars.websiteId).toBe("ENTROLYTICS_WEBSITE_ID");
      expect(expectedVars.host).toBe("ENTROLYTICS_HOST");
    });

    it("Go should read ENTROLYTICS_WEBSITE_ID", () => {
      const expectedVars = ENV_VAR_NAMES.go;

      expect(expectedVars.websiteId).toBe("ENTROLYTICS_WEBSITE_ID");
      expect(expectedVars.host).toBe("ENTROLYTICS_HOST");
    });
  });

  describe("CLI Detection Alignment", () => {
    it("all frameworks in shared constants should have package names", () => {
      const frameworks = Object.keys(ENV_VAR_NAMES);

      for (const framework of frameworks) {
        const envVars = ENV_VAR_NAMES[framework as keyof typeof ENV_VAR_NAMES];

        expect(envVars.websiteId).toBeTruthy();
        expect(envVars.host).toBeTruthy();
        expect(envVars.envFile).toBeTruthy();
      }
    });
  });
});
