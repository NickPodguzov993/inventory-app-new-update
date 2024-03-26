type PropsType = {
    title: string
}
const HelpBlock = ({title}: PropsType) => {
    return (
        <div className="fr w-full h-auto self-center">
            <div className="w-[20px] bg-[#F9F9F9]">
                <div className="w-full h-full rounded-br-[20px] bg-white"/>
            </div>
            <div className="w-full h-auto  p-8 text-center bg-[#F9F9F9] rounded-br-[20px] rounded-t-[20px]">
                {title}
            </div>
        </div>
    );
};

export default HelpBlock;