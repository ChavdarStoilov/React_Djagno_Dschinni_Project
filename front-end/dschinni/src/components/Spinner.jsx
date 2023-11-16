
export default function SpinnerModal({ cname, msg }) {
    return (
        <div className={cname === "details-spinner" ? cname + " spinner-container" : "spinner-container"}>
            <div className="loading-spinner"></div>
            <h1 className={cname}>{msg}</h1>
        </div>
    );
}
