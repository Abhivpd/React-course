import { useEffect, useState } from "react"
import { MENU_API } from "./constants"

const useRestaurantMenu = (restaurantId) => {
    console.log('useres hook called')

    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        console.log('useeffect')
        fetchRestaurantData()
    }, [])

    const fetchRestaurantData = async () => {
        const resData = await fetch(`${MENU_API}${restaurantId}`);
        const jsonData = await resData.json();
        const data = jsonData?.data;
        // const data = jsonData?.data?.cards[0]?.card?.card?.info;
        // console.log(jsonData?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
        return setRestaurantInfo(data);
    }

    return restaurantInfo;
}

export default useRestaurantMenu;