import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        console.log('useEffect() called');
        fecthRestaurantData()
    }, [])

    const fecthRestaurantData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        restaurantsLists = jsonData?.data?.cards[2]?.data?.data?.cards;
        setListOfRestaurants(restaurantsLists);
        setFilteredRestaurants(restaurantsLists);
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button className="filter-button" onClick={
                    () => {
                        const filteredRestaurants = listOfRestaurants?.filter(restaurant => restaurant.data.avgRating > 4);
                        setFilteredRestaurants(filteredRestaurants);
                    }
                }>Top Rated Restaurants</button>
                <div>
                    <input type="text" placeholder="search for restaurants" value={text} onChange={(event) => {
                        setText(event.target.value);
                    }} />
                    <button type="submit" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(restaurant => {
                            const restaurantName = restaurant?.data?.name.toLowerCase();
                            return restaurantName.includes(text.toLowerCase());
                        })
                        setFilteredRestaurants(filteredRestaurants)
                    }}>Search</button>
                </div>
            </div>
            <div className="restaurant-card-container">
                {filteredRestaurants?.map(restaurant => <RestaurantCard key={restaurant.data.id} restaurantData={restaurant} />)}
            </div>
        </div>
    );
}

export default Body;