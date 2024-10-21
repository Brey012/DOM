function calculateDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;

    return priceWithDiscount;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log('Original price: ', originalPrice);
console.log('Discount percentage: ', discountPercentage);
console.log('Final price: ', finalPrice);

// Arrow function
const greeting = (name) => {
    return `Hello ${name}`;
}

console.log(greeting('John'));