var express = require('express');
const path = require('path');

var app = express();

app.get('/*', (req, res)=>{
    if(req.path.includes('/assets'))
    {
        fs.access(req.path, (err) => {
            if(err) 
            {
                res.status(404).send("Sorry can't find that!");
                return;
            }
        });
    }
    res.sendFile(path.resolve('src', 'app', 'homework.html'));
});

var server = app.listen(8000, function(){});
