function milesOver2(miles, feePerMile, initialfee) {
    var feeMilesOver2;

    if (miles > 2) {
        if (miles < 8) {
            feeMilesOver2 = (miles - 2) * feePerMile + initialfee;
        } else {
            feeMilesOver2 = 6 * feePerMile + initialfee;
        }
    } else {
        feeMilesOver2 = initialfee
    }
    return feeMilesOver2
}

function milesOver8(miles, feePerMile, extraRate) {
    var feeMilesOver8;
    if (miles > 8) {
        feeMilesOver8 = (miles - 8) * feePerMile * (1 + extraRate);
    } else {
        feeMilesOver8 = 0;
    }
    return feeMilesOver8
}

function waitCharge(waiting, feePerMin) {
    return waiting * feePerMin;
}

function totalCharge(miles2, miles8, waitfee) {
    return Math.round(miles2 + miles8 + waitfee);
}

module.exports = function main(miles, waiting) {
    var miles2, miles8, waitfee, total;
    const initialfee = 6,
        feePerMile = 0.8,
        extraRate = 0.5,
        feePerMin = 0.25;

    miles2 = milesOver2(miles, feePerMile, initialfee);
    miles8 = milesOver8(miles, feePerMile, extraRate);
    waitfee = waitCharge(waiting, feePerMin);
    total = totalCharge(miles2, miles8, waitfee);
    return total;
};