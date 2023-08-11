import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    console.log('comp called')

    const { restaurantId } = useParams();

    const restaurantInfo = useRestaurantMenu(restaurantId);

    const [showIndex, setShowIndex] = useState(null);

    if (restaurantInfo === null) return <Shimmer />;
    else {
        // console.log(restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card)
        const { name, locality, cuisines, costForTwoMessage } = restaurantInfo?.cards[0]?.card?.card?.info;
        // console.log(restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards)
        const { itemCards } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;
        // console.log(restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards)

        const categories = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(restaurant => {
            return restaurant.card.card.title;
        })

        return (
            <>
                <div className="text-center m-4">
                    <h1 className="font-bold text-2xl my-4">{name}</h1>
                    <h3 className="font-bold text-lg">{locality}</h3>
                    <p className="font-bold text-lg">{cuisines.join(',')} - {costForTwoMessage}</p>
                </div>
                {categories.map((category, index) => {
                    console.log(category);
                    return <RestaurantCategory menuData={category.card.card} key={category.card.card.title} showMenuList={index === showIndex ? true : false} index={index} setIndex={ showIndex} setIndexFunction={(newIndex) => setShowIndex(newIndex)} />
                })}
            </>
        )
    }
}

export default RestaurantMenu;