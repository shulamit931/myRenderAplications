const express = require("express");
const app = express();
const sdk=require('api')('@render-api/v1.0#dnrc1ulf088q9j');



app.get('/', (req, res) => {
    sdk.auth('rnd_44yRgsDvqy7TAOk8IGZBDxIEC9Ym');
    sdk.getServices({ limit: '20' })
        .then(({ data }) => {res.send(data)})
        .catch(err => console.error(err));

})
app.listen(3000)