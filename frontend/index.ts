import figlet from "figlet";

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync("Bun!!!");
    return new Response("title Name \n" + body);
  },
  port: 3000,
});