
type PropsType = {
    title: string,
    onClick?: () => void
}
const CancelButton = ({title, onClick} : PropsType) => {
    return (
        <div onClick={onClick}
            className="h-[50px] cursor-pointer w-full px-8 rounded-[100px] border border-[#2962FF] justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#2962FF] text-base font-bold font-['Roboto']">{title}</div>
        </div>
    );
};

export default CancelButton;