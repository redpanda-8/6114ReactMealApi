// <section aria-label="Download app section"></section>
import phoneImg from "../../img/downloadCTA.png";

const DownloadCTA =()=> {
    return (
        <section className="cta-section my-5" aria-label="Download app section">
            <div className="container">
                <div className="cta-card rounded-4 p-4 p-md-5 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
                    <div className="text-white">
                        <h2 className="fw-bold mb-2"> Embrace the joy of cooking with get it on your iPhone or Android Your kitchen adventure begins now!</h2>

                        <div className="d-flex gap-2 flex-wrap mt-3">
                            <button className="btn btn-brand" type="button" aria-label="Download on App Store">🍎 App Store</button>
                            <button className="btn btn-brand" type="button" aria-label="Get it on Google Play">▶️ Google Play</button>
                        </div>
                    </div>

                    <img src={phoneImg} alt="Recipedia mobile app preview" className="cta-phone-img"/>
                </div>
            </div>
        </section>
    );
};
export default DownloadCTA;