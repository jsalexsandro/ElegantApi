import { newRoute } from "./routes.js"
import fileDawnloads from "./fileDawnloads.js"

const fileDawnloadsRoute = newRoute("fileDawnloads",(resp) => {
    new fileDawnloads(resp)
})

