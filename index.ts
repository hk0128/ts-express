import express from 'express'
import axios from 'axios';
const app: express.Express = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("Node.js is listening to PORT:3000")
})

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("hello, world!")
})

app.get('/weather', async (req: express.Request, res: express.Response) => {
    const url:string = "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json";
    const result = await axios.get(url)

    res.json(JSON.stringify(result.data))
})
