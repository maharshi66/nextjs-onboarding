const ProgressBar = ({ progress }) => {
    const fillerStyle = {
        width: `${progress ? progress : 20}%`,
        transition: 'width 0.5s ease-in-out',
    }

    if (progress) {
        return (
            <div className="h-1 rounded-full w-full bg-[#e0e0de]">
                <div style={fillerStyle} className="h-full rounded-full bg-[#6A5ACD] ">
                </div>
            </div>
        );
    } else {
        return (
            <div className="h-1 rounded-full w-full bg-[#e0e0de]">
            </div>)
    }
};

export default ProgressBar;