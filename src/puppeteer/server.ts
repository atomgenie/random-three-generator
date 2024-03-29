import {createServer} from "http"
import handler from "serve-handler"

export const startServer = async () => {
  const server = createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/vercel/serve-handler#options
    return handler(request, response, {
      public: "./build",
    })
  })

  return new Promise<() => void>(resolve => {
    server.listen(3000, () => {
      console.log("Running at http://localhost:3000")
      resolve(() => server.close())
    })
  })
}
