import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restaurantData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId } = restaurantData?.data;


    return (<div className="restaurant-card">
        <h3 className="restaurant-name">{name}</h3>
        <img className="restaurant-image" src={`${CDN_URL}/${cloudinaryImageId}`} alt={name} />
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
    </div>)
}

export default RestaurantCard;