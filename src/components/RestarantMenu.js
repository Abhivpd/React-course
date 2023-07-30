import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    console.log('comp called')

    const [restaurantInfo, setRestaurantInfo] = useState(null);

    const { restaurantId } = useParams();

    useEffect(() => {
        fetchRestaurantData()
    }, [])

    const fetchRestaurantData = async () => {
        const resData = await fetch(`${MENU_API}${restaurantId}`);
        const jsonData = await resData.json();
        const data = jsonData?.data;
        // const data = jsonData?.data?.cards[0]?.card?.card?.info;
        // console.log(jsonData?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
        setRestaurantInfo(data);
    }

    if (restaurantInfo === null) return <Shimmer />;
    else {
        // console.log(restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card)
        const { name, locality, cuisines, costForTwoMessage } = restaurantInfo?.cards[0]?.card?.card?.info;
        const { itemCards } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;
        return (
            <>
                <h1>{name}</h1>
                <h3>{locality}</h3>
                <p>{cuisines.join(',')} - {costForTwoMessage}</p>
                <h2>Menu</h2>
                <ul>{

                    itemCards.map(item => { console.log(item.card); return <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li> })
                }
                </ul>
            </>
        )
    }
}

export default RestaurantMenu;