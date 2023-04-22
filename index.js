const express = require('express')
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');
const app = express()
sdk.auth('rnd_44yRgsDvqy7TAOk8IGZBDxIEC9Ym');
sdk.getServices({ limit: '20' })
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));


app.get('/', (req, res) => {
    sdk.auth('rnd_44yRgsDvqy7TAOk8IGZBDxIEC9Ym');
    sdk.getServices({ limit: '20' })
        .then(({ data }) => {console.log(data);res.send(data)})
        .catch(err => console.error(err));

})
app.listen(3001,()=>{console.log("hi")})