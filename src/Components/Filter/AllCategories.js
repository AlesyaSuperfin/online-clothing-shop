import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="categories_container">
            {['VIEW ALL', 'DRESS', 'PANTS', 'SKIRT', 'SHIRT', 'SHOES'].map((category, index) => <Filter key={index} category={category} />)}
        </div>
    )
}

export default AllCategories;