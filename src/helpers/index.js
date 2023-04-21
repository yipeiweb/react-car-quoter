export function getYearDiff(year) {
    return new Date().getFullYear() - year
}

export function brandCalc(brand) {
    let increment;

    if(brand == "1") {
        increment =  1.3;
    } else if (brand == "2") {
        increment =  1.15;
    } else if (brand == "3") {
        increment =  1.05;
    }

    return increment
}

export function planCalc(plan) {
    return (plan === "1") ? 1.2 : 1.5
}

export function moneyFormater(quantity) {
    return quantity.toLocaleString('es-Es', {
        style: 'currency',
        currency: 'EUR'
    })
}