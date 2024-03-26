type FilterButtonType = {
    title?: string | boolean,
    close?: () => void
}

const FilterButton = ({title, close}: FilterButtonType) => {
    return (
        <button onClick={close}
            className="user_filter_button">
            {title}
        </button>
    );
};

export default FilterButton;