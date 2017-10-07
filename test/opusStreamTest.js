var OpusFile = require('node-opusfile');
var OpusStreamService = require('../api/services/OpusStreamService');


describe('OpusFile', function () {
    it('should convert success',
        function (done) {
            var rawOpus = './data/0_3_2558_7675_1491205075821_23584ms.opus';
            var convertResult = './data/convertResult.opus';
            OpusFile.Normalize(rawOpus, convertResult);
            done();
        });

    it('should speak',
        function (done) {
            var rawOpus = './data/0_3_2558_7675_1491205075821_23584ms.opus';
            var convertResult = './data/convertResult.opus';
            OpusFile.Normalize(rawOpus, convertResult);
            OpusStreamService.voiceStream(convertResult)
            done();
        });
});