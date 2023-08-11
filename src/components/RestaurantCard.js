import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restaurantData } = props;
    // const { name, cuisines, avgRating, cloudinaryImageId } = restaurantData?.data;
    const { name, cuisines, avgRating, cloudinaryImageId } = restaurantData?.info;


    return (
        <div className="m-4 p-4 w-[250px] flex flex-col gap-4 hover:bg-slate-50 mt-0 pt-0" onClick={() => {

        }}>
            <img className="restaurant-image rounded-md h-64 w-80" src={`${CDN_URL}/${cloudinaryImageId}`} alt={name} />
            <h3 className="font-bold text-xl ml-4">{name}</h3>
            <h4 className="ml-4">{avgRating} stars</h4>
            <h4 className="ml-4">{cuisines.join(', ')}</h4>
        </div>)
}

export const PromotedRestaurantCard = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label className="bg-green-900 text-white absolute px-4 ml-4 rounded-md">Rating 4+</label>
                <RestaurantCard {...props} />
            </>
        )
    }
}

export default RestaurantCard;