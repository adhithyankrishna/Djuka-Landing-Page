import '../style/Connect.css'

const Connect = () => {
    return (
        <div className="form-container">
            <form>
                <p>READY TO GET STARTED?</p>
                <h1>Discover a new era of banking. Reach out to start your journey today.</h1>
                <div className="grid-layout">
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" required />
                    </div>
                    <div className="form-group full-width">
                        <label>Message</label>
                        <textarea required></textarea>
                    </div>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Connect;
