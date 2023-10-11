const express = require('express');
const app = express();
const port = 3000;

const data = [
    {
        id: 1,
        item: "Samsung galaxy s22",
        price: 19999,
        tag: "samsung"
    },
    {
        id: 2,
        item: "samsung galaxy fold",
        price: 29999,
        tag: "samsung"
    },
    {
        id: 3,
        item: "Iphone 14 pro",
        price: 23999,
        tag: "iphone"
    },
    {
        id: 4,
        item: "google pixel 6",
        price: 80000,
        tag: "Google"
    },
    {
        id: 5,
        item: "Google pixel 8",
        price: 99999,
        tag: "Google"
    },
    {
        id: 6,
        item: "sony xperia 8",
        price: 9999,
        tag: "sony"
    },


]

app.get('/api/products', (req, res) => {

    // console.log(req.query);

    setTimeout(()=> {
        if (req.query.search) {
            const filtereddata = data.filter((prod) => prod.tag.toLowerCase().includes(req.query.search));
            res.send(filtereddata);
            return;
        }
    
        res.send(data);
    }, 2000)
})

app.listen(port, () => {
    console.log(`Server listen on ${port}`)
})