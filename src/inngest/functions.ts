import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "summarizer",
      system: "You are an expert next js devoloper.  You write readable, maintainable code. You write simple next js and react snippets.",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.input}`
    );

    return { output }
  },
);