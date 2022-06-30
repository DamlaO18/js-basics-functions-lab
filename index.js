// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return(Math.abs(distance-42));
}

function distanceFromHqInFeet(distance) {
    return(Math.abs(distanceFromHqInBlocks(distance)*264));
}

function distanceTravelledInFeet(x, y) {
    return(Math.abs((x - y) * 264));
}

function calculatesFarePrice(start, destination) {
    
    if (Math.abs((start - destination) * 264) <= 400) {
        return(0);
    } else if (Math.abs((start - destination) * 264) > 400) {
        return(Math.abs((start - destination) * 264 -400) * 0.02);
    } else if ((Math.abs(start - destination) * 264) > 2000) {
        return(25);
    } else if (Math.abs((start - destination) * 264) >= 2500) {
        return('cannot travel that far');
    } else {
        return("try again");
    }
}

console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));