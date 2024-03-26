type PropsType = {
    item: string,
    label: string
}
const EditInput = ({item, label}: PropsType) => {
    return (
        <div className="flex w-full flex-col gap-2">
            <div className="edit_input_label">{label}</div>
            <input type="text" className="edit_input" value={item}/>
        </div>
    );
};

export default EditInput;