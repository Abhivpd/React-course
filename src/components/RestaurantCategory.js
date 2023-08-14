// import { useState } from "react";
import { useState } from "react";
import MenuList from "./MenuList";

const RestaurantCategory = ({ menuData, showMenuList, setIndexFunction, index, showIndex }) => {

    const { title, itemCards, categories } = menuData;

    const handleClick = () => {
        index === showIndex ? setIndexFunction(null) : setIndexFunction(index);
    }

    if (itemCards) {
        return (
            <>
                <div className="w-6/12 bg-slate mx-auto my-2 p-4 shadow-2xl">
                    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                        <span className="font-bold text-lg">{title} ({itemCards?.length})</span>
                        <span>🔽</span>
                    </div>
                    {showMenuList && <MenuList key={title} items={itemCards} />}
                </div>
            </>
        )
    }
    return (
        <>
            {categories?.map(category => {
                return (
                    <div className="w-6/12 bg-slate mx-auto my-2 p-4 shadow-2xl" key={category.title}>
                        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                            <span className="font-bold text-lg">{category.title} ({category.itemCards?.length})</span>
                            <span>🔽</span>
                        </div>
                        {showMenuList && <MenuList key={category.title} items={category.itemCards} />}
                    </div>
                )
            })}
        </>
    )
}

export default RestaurantCategory;