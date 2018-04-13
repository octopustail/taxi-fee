const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    var less2 = 1.8
    var Over2Less8 = 4;
    var equal8 = 8;
    var over8 = 10;
    var waitTimezero = 0;
    var waitTime = 6;

    it('should print correct charge when less than 2',function () {

        var fee = 6;
        var result = main(less2,waitTimezero);
        expect(result).toEqual(fee);
    });
    it('should print correct charge when more than 2,less than eight', function () {


        var fee = 8;
        var result = main(Over2Less8,waitTimezero);
        expect(result).toEqual(fee);
    });
    it('should print correct charge when equal to 8', function () {


        var fee = 11;
        var result = main(equal8,waitTimezero);
        expect(result).toEqual(fee);
    })
    it('should print correct charge when over  8', function () {


        var fee1 = 13;
        var result = main(over8,waitTimezero);
        expect(result).toEqual(fee1);
    });



});
