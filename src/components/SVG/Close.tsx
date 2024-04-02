type PropsType = {
    close: () => void
}
const Close = ({close}: PropsType) => {
    return (
        <div onClick={close}
            className="cursor-pointer absolute right-[-61px] top-[15px] z-[2] w-12 h-12 bg-white rounded-[100px] justify-center items-center gap-2.5 inline-flex">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group">
                    <path id="Vector"
                          d="M9.29762 8.00001L15.0652 2.23243C15.1504 2.14731 15.218 2.04622 15.2641 1.93494C15.3103 1.82367 15.334 1.7044 15.334 1.58395C15.334 1.4635 15.3103 1.34423 15.2641 1.23295C15.218 1.12168 15.1504 1.02059 15.0652 0.935464C14.9801 0.850247 14.879 0.782645 14.7677 0.736521C14.6564 0.690397 14.5372 0.666656 14.4167 0.666656C14.2963 0.666656 14.177 0.690397 14.0657 0.736521C13.9544 0.782645 13.8534 0.850247 13.7682 0.935464L8.00065 6.70304L2.23277 0.935464C2.14764 0.850247 2.04655 0.782645 1.93528 0.736521C1.82401 0.690397 1.70474 0.666656 1.58428 0.666656C1.46383 0.666656 1.34456 0.690397 1.23329 0.736521C1.12202 0.782645 1.02093 0.850247 0.9358 0.935464C0.850583 1.02059 0.78298 1.12168 0.736857 1.23295C0.690733 1.34423 0.666992 1.4635 0.666992 1.58395C0.666992 1.7044 0.690733 1.82367 0.736857 1.93494C0.78298 2.04622 0.850583 2.14731 0.9358 2.23243L6.70368 8.00001L0.9358 13.7676C0.850659 13.8527 0.783126 13.9538 0.737057 14.0651C0.690987 14.1764 0.667282 14.2956 0.667296 14.416C0.667311 14.5364 0.691043 14.6557 0.737139 14.7669C0.783235 14.8782 0.850792 14.9793 0.935952 15.0644C1.02111 15.1495 1.12221 15.2171 1.23347 15.2631C1.34473 15.3092 1.46397 15.3329 1.58439 15.3329C1.70481 15.3329 1.82405 15.3092 1.9353 15.2631C2.04655 15.217 2.14763 15.1494 2.23277 15.0642L8.00065 9.29667L13.7682 15.0642C13.9474 15.2434 14.1822 15.333 14.4167 15.333C14.6512 15.333 14.886 15.2434 15.0652 15.0642C15.1504 14.9791 15.218 14.878 15.2641 14.7668C15.3103 14.6555 15.334 14.5362 15.334 14.4158C15.334 14.2953 15.3103 14.176 15.2641 14.0648C15.218 13.9535 15.1504 13.8524 15.0652 13.7673L9.29762 8.00001Z"
                          fill="#616161"/>
                </g>
            </svg>
        </div>
    );
};

export default Close;