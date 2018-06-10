const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.port || 3000;


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use((req, res, next) => {

});


app.get('/', (req, res) => {
    /*res.send('<h1>Hello Express</h1>');
    res.send({
        name: 'Kim',
        likes: [
            'Bohol',
            'Cebu'
        ]
    });*/
    res.render('home.hbs', {
        name: 'Kim',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Err: Unable to handle request'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});