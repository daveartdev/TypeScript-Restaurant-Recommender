import restaurants from './restaurants';

const dollarSigns = '$$';
const deliveryTimeMax = 90; // changed from string to number variable
const maxDistance = 10;
let result: string; // changed from any type to specific string type annotation

const hour: number = new Date().getHours(); //declared new variable hour and used getHours method to get 24 hour utc time

const priceBracket: number = dollarSigns.length; //changed type annotation from string to number

const filteredRestaurants = restaurants.filter((restaurant) => {
  if (Number(restaurant.priceBracket) > priceBracket) {
    return false;
  } // added (Number constructor to transfrom type

  if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
    return false;
  }

  if (Number(restaurant.distance) > maxDistance) {
    return false;
  }

  if (hour < Number(restaurant.openHour) || hour > Number(restaurant.closeHour)) {
    return false;
  } //set variable conditions to check against opening and closing hours also changing the type annotation to Number( 

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
} //changed restaurant.name to .name property to link to type on restaurants.ts file

console.log(result);

// Setting a new type outside of existing will transfrom the type. example Number(string.method) will now give you number type instead of string. 