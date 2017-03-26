const express = require('express');
const fs = require('fs');
const imdb = require('imdb-api');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

function search(title, callback) {
    return imdb.getReq({name: title}).then(callback);
}


function save(data, filename) {
    console.log('save()', data.title);//TODO remove this
    if (!fs.existsSync(filename)) {
        fs.writeFile(filename, JSON.stringify(data), 'utf8');
    }else {
        fs.readFile(filename, 'utf8', (err, data1) => {
            console.log('ron index.()', err, data1);//TODO remove this
            if (err) {
                console.error(err);
            } else {
                let obj = JSON.parse(data1);
                obj.table.push(data);

                fs.writeFile(filename, JSON.stringify(obj), 'utf8');
            }
        });
    }
}

const topMovieTitles = ['Iron Man', 'Titanic', 'The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction'];

topMovieTitles.map((title) => search(title, (movie) => save(movie, 'movies.json')));
