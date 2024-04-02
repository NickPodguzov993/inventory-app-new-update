
type Props = {
    open?: () => void,
    save?: () => void
    title: string
}
const EditButton = ({open, title, save}: Props) => {
    return (
        <div onClick={open || save}
            className="cursor-pointer px-8 w-full bg-blue-600 rounded-[100px] h-[51px] justify-center self-end items-center gap-2.5 flex">
            <div className="text-white text-base font-bold font-['Roboto']">{title}</div>
        </div>
    );
};

export default EditButton;