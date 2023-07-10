import { useState } from "react";
import { restaurantDataList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {

    // const array = useState(restaurantDataList); 
    // console.log(array)
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantDataList);        //Array Destructuring

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-button" onClick={
                    () => {
                        filteredRestaurants = listOfRestaurants.filter(restaurant => restaurant.data.avgRating > 4);
                        setListOfRestaurants(filteredRestaurants);
                    }
                }>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-card-container">
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} restaurantData={restaurant} />)}
            </div>
        </div>
    );
}

export default Body;