import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "wealthi", // Unique app ID
  name: "Wealthi",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});