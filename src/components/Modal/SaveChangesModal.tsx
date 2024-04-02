import Close from "../SVG/Close.tsx";
import EditButton from "../Buttons/EditButton.tsx";

type ModalProps = {
    close: () => void
}
const SaveChangesModal = ({close}: ModalProps) => {
    return (
        <div className="absolute z-[3]  w-screen h-screen flex-row bg-black bg-opacity-50 flex items-center justify-center">
            <div
                className="w-[480px] relative p-8 bg-white rounded-[40px] flex-col justify-start items-center gap-8 inline-flex">
                <div className="text-center text-neutral-800 text-[32px] font-bold font-['Roboto']">Изменения успешно
                    сохранены
                </div>
                <EditButton open={close} title={"Хорошо"}/>
                <Close close={close}/>
            </div>

        </div>
    );
};

export default SaveChangesModal;