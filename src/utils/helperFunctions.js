

export const isMobile = () => {
  
  return window.innerWidth <= 768;
}

export const sortByDeliveryTime = (restaurantList) => {
    const data = [...restaurantList];
    const result = data.sort(
      (item1, item2) =>
        item1?.info?.sla?.deliveryTime - item2?.info?.sla?.deliveryTime
    );
    return result;
}

export const sortByCost = (restaurantList) => {
    const data = [...restaurantList];
    const result = data.sort(
      (item1, item2) =>
        parseInt(item1?.info?.costForTwo.match(/\d+/)[0], 10) -
        parseInt(item2?.info?.costForTwo.match(/\d+/)[0], 10)
    )
    return result;
}

export const sortByRating = (restaurantList) => {
    const data = [...restaurantList];
    const result = data.sort(
      (item1, item2) => item1?.info?.avgRating - item2?.info?.avgRating
    );
    return result;
  };