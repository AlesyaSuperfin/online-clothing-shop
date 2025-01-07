import instagram_icon from './images/instagram.png';
import pinterest_icon from './images/pinterest.png';
import facebook_icon from './images/facebook.png';

function Footer () {
    return(<div>
        <br></br>
        <hr class="line_big"></hr>
        <br></br>
        <div className="main_footer">
        <div className="footer_box">
                <p className="footer_text"><a className="footer_link" href='/'>Shop</a></p>
                <p className="footer_text"><a className="footer_link" href='/about'>About</a></p>
                <p className="footer_text"><a className="footer_link" href='/contacts'>Contacts</a></p>
                <h3>Estetica Etc.</h3>
            </div>
            <div className="footer_box">
                <p className="footer_text">500 Terry Francine Street</p>
                <p className="footer_text">San Francisco, CA 94158</p>
                <p className="footer_text"><a className="footer_link" href="mailto:info@estetika.com">info@estetika.com</a></p>
                <p className="footer_text">Call 1.800.723.2889</p>
            </div>
            <div className="footer_box">
                <a href="https://www.instagram.com/" target='blank'><img src={instagram_icon} width="40px" alt="icon"/></a>
                <a href="https://www.pinterest.com/" target='blank'><img src={pinterest_icon} width="40px" alt="icon"/></a>
                <a href="https://www.facebook.com/" target='blank'><img src={facebook_icon} width="40px" alt="icon"/></a>
            </div>
        </div>
        <p className="footer_text developed_by">Developed by <a href="https://alesya-superfin-web-developer.glitch.me/" target="blank" className="footer_link">Alesya Superfin</a></p>
    </div>)
}

export default Footer;