import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    console.log('comp called')

    const { restaurantId } = useParams();

    const restaurantInfo = useRestaurantMenu(restaurantId);

    console.log('yesss222')

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

                    itemCards.map(item => {
                        // console.log(item.card);
                        return <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
                    })
                }
                </ul>
            </>
        )
    }
}

export default RestaurantMenu;