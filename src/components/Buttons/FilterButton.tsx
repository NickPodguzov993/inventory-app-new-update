type FilterButtonType = {
    title: string,
    close?: () => void,
    setFilter: (department: string) => void;
    isActive?: boolean
}

const FilterButton = ({title, setFilter}: FilterButtonType) => {

    return (
        <button onClick={() => setFilter(title)}
                // style={isActive? {backgroundColor: "green"} : {backgroundColor: "red"}}
            className="user_filter_button">
            {title}
        </button>
    );
};
export default FilterButton;