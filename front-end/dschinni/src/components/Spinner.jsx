// import syles from "../CCSModules/spinner.module.css"

export default function SpinnerModal({ cname, msg }) {
    return (
        <div className="spinner-container">
            <div className="loading-spinner"></div>
            <h1 className={cname}>{msg}</h1>
        </div>
    );
}
