/**
 * AudioController
 *
 * @description :: Server-side logic for managing audios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');


module.exports = {


    /**
     * `AudioController.play()`
     */
    list: function (req, res) {
        return res.json({
            todo: 'list() is not implemented yet!'
        });
    },

    play: function (req, res) {
        var fileName = req.param('fileName');
        var stream = fs.createReadStream('./data/' + fileName + '.opus');
        stream
            .on('data', function (chunk) {
                console.log(chunk);
            })
            .on('open', function (chunk) {
                console.log('OPEN');
                stream.pipe(res);
            })
            .on('end', function () {
                console.log('All the data in the file has been read');
            })
            .on('close', function (err) {
                console.log('Stream has been destroyed and file has been closed');
            });

    }
};

