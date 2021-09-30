module.exports = function averageRateCalculate(obj) {
    let totalRating = 0;
    for (let review of obj.reviews) {
        totalRating += review.rating;
    }
    return Math.round(totalRating / obj.reviews.length);
};
