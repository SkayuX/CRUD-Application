import express from 'express'; //
import cors from 'cors'; //
import bodyParser from 'body-parser'; //

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/api/v1/auth/fetchUser", (req, res) => {
    const sessionId = req.body.sessionId;

    if (!sessionId) return;

    if (sessionId === 'default') {
        const object = {
            status: true,
            data: {
                code: 200,
                user: {
                    name: "string",
                    avatar: "string",
                    dateCreated: "string",
                    aboutMe: "string",
                    uniqueId: "string"
                }
            }
        }
        
        setTimeout(() => {
            console.log('Timeout Started...')
            res.status(200).send(object);
        }, 3500)
    }
})

app.listen(8080, () => {
    console.log("api listening on port 8080")
})