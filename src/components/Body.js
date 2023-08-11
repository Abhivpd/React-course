import { useContext, useEffect, useState } from "react";
import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link, json } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        console.log('useEffect() called');
        fecthRestaurantData()
    }, []);

    const onlineStatus = useOnlineStatus();

    const contextData = useContext(UserContext)

    if (!onlineStatus) {
        return (
            <h1>You are offline, PLease connect to the Internet!!</h1>
        )
    }

    const fecthRestaurantData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        // restaurantsLists = jsonData?.data?.cards[2]?.data?.data?.cards;
        console.log(jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        restaurantsLists = jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurants(restaurantsLists);
        setFilteredRestaurants(restaurantsLists);
    }

    const RestaurantCardWithGoodRatings = PromotedRestaurantCard(RestaurantCard)

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="p-4 m-4">
                    <button className="px-4 py-2 bg-gray-200 rounded-md" onClick={
                        () => {
                            const filteredRestaurants = listOfRestaurants?.filter(restaurant => restaurant.info.avgRating > 4);
                            setFilteredRestaurants(filteredRestaurants);
                        }
                    }>Top Rated Restaurants</button>
                </div>
                <div className="p-4 m-4">
                    <input className="border border-black rounded pl-4 py-1" type="text" placeholder="search for restaurants" value={text} onChange={(event) => {
                        setText(event.target.value);
                    }} />
                    <button type="submit" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(restaurant => {
                            const restaurantName = restaurant?.info?.name.toLowerCase();
                            return restaurantName.includes(text.toLowerCase());
                        })
                        setFilteredRestaurants(filteredRestaurants)
                    }} className="px-4 py-2 bg-green-50 rounded-md ml-2">Search</button>
                    <label className="mx-8">Set Name :</label>
                    <input className="border border-black mx-2 px-4" value={ contextData.loggedInUser} onChange={(event) => contextData.setUserName(event.target.value)}/>
                </div>
            </div>
            <div className="restaurant-card-container flex flex-wrap">
                {filteredRestaurants?.map(restaurant => <Link to={`restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                    {restaurant.info.avgRating >= 4 ? <RestaurantCardWithGoodRatings restaurantData={restaurant} /> : <RestaurantCard restaurantData={restaurant} />}
                </Link>)}
            </div>
        </div>
    );
}

export default Body;