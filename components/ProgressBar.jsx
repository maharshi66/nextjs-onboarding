const ProgressBar = ({ progress }) => {
    if (progress) {
        return (<div style={{ minWidth: "1rem", maxWidth: "6rem", width: `${progress}%` }} className="h-1 rounded-full bg-white"></div>);
    } else {
        return (<div style={{ width: "6rem" }} className="h-1 rounded-full bg-neutral-400"></div>);
    }
}

export default ProgressBar;