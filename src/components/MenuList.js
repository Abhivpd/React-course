const MenuList = ({ items }) => {
    console.log(items);
    return (
        <>
            {items.map(item => {
                const { id, name, price } = item?.card?.info;
                return (
                    <div key={id} className="mx-8">
                        <h3 className="font-medium">{name} - {price / 100}</h3>
                    </div>
                )
            })}
        </>
    )
}

export default MenuList;