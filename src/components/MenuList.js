const MenuList = ({ items }) => {
    console.log(items);
    return (
        <>
            {items.map(item => {
                const { id, name, price, description } = item?.card?.info;
                return (
                    <>
                        <div key={name} className="m-8 border-b-2 pb-4 flex justify-between items-center">
                            <section className="w-9/12">
                                <h3 className="font-medium my-2">{name} -  ₹{price / 100}</h3>
                                <h4>{description}</h4>
                            </section>
                            <button type="button" className="border border-black cursor-pointer p-2">Add +</button>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default MenuList;