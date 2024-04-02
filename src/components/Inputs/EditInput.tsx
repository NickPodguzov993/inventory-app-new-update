
type PropsType = {
    item: string | null
    label: string
    onChange: (title: string) => void
    error: boolean

}
const EditInput = ({item, label, onChange, error}: PropsType) => {


    return (
        <div className="flex w-full flex-col gap-2">
            <div className={error ? "edit_input_label_error":"edit_input_label"}>{label}</div>
            <input
                autoFocus={true}
                type="text"
                onChange={(e) => onChange(e.currentTarget.value)}
                className="edit_input"
                value={item}/>
        </div>
    );
};

export default EditInput;