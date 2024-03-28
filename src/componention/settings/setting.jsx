import './setting.scss'


function Setting() {
    return (
        <div className="settings">
            <h3>SMS Preferences</h3>
            <div className="sett">
                <p>Order related SMS cannot be disabled as they are critical to provide service</p>
            </div>
            <div className='se'>
                <div className="le">
                    <p>Recommendations & Reminders</p>
                </div>
                <div className='hr' ></div>
                <div className="re">
                    <p>Keep this on to receive offer recommendations & timely reminders based on your interests</p>
                </div>
            </div>
        </div>
    )
}
export default Setting;