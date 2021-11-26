const express = require('express');

const app = express()

const port = 6000

app.get('/', (req, res)=>{
    res.send('Love yaa Sweethie')
})

app.listen(port, () => {
    console.log('${port}')
})