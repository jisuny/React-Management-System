const express = require('express');
const bodyParser = require('body-parser');
const app =express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res)=> {
    res.send([
        {
        'id':1,
        'image': 'http://jsyoon.dothome.co.kr/no_image.jpg',
        'name': '윤지선',
        'birthday': '950211',
        'gender': '여',
        'job': '직장인'
        },
        {
            'id':2,
            'image': 'http://jsyoon.dothome.co.kr/no_image.jpg',
            'name': '김김',
            'birthday': '950211',
            'gender': '남',
            'job': '학생'
        },
        {
            'id':3,
            'image': 'http://jsyoon.dothome.co.kr/no_image.jpg',
            'name': '윤윤',
            'birthday': '961222',
            'gender': '여',
            'job': '학생'
        }    
    ]);
})

app.listen(port, ()=> console.log(`listening on port ${port}`));