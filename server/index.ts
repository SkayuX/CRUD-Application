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
                    name: "to jest nazwa uzytkownika",
                    avatar: "to jest jego avatar",
                    dateCreated: "string",
                    aboutMe: "string",
                    uniqueId: "string"
                }
            }
        }
        
        setTimeout(() => {
            console.log('Timeout Started...')
            res.status(200).send(object);
        }, 2000)
    }
})

app.post('/api/v1/auth/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    if (username === 'skayu' && password === '12345') {
        res.send({
            status: true,
            data: {
                code: 200,
                message: "Logged In",
                cookie: "10"
            }
        })
    } else {
        res.send({
            status: false,
            data: {
                code: 400,
                message: "Invalid Data",
                cookie: null
            }
        })
    }
})

app.listen(8080, () => {
    console.log("api listening on port 8080")
})