type FilterButtonType = {
    title: string,
    close?: () => void,
    setFilter: (title: string) => void;
    isActive?: boolean
    filter: string;
}

const FilterButton = ({title, setFilter, filter}: FilterButtonType) => {

    return (
        <button onClick={() => setFilter(title)}
            className={filter === title ? "user_filter_button_active" : "user_filter_button"}>
            {title}
        </button>
    );
};
export default FilterButton;