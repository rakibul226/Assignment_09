
const Footer = () => {
    return (
        <footer className="footer p-10  text-base-content pl-24">
            <aside>
            <img src="logo.png" className="h-10" alt="" />
            {/* <p>Gamer's Haven<br/>Bringing thrilling adventures since 2024</p> */}
            <p className="text-sm">&copy; 2024 BattleZone Arena. All rights reserved.</p>

            </aside> 
                <nav>
                    <h6 className="footer-title">Games</h6> 
                    <a className="link link-hover">Action</a>
                    <a className="link link-hover">Adventure</a>
                    <a className="link link-hover">Strategy</a>
                    <a className="link link-hover">Role-playing</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Community</h6> 
                    <a className="link link-hover">Forums</a>
                    <a className="link link-hover">Events</a>
                    <a className="link link-hover">Leaderboards</a>
                    <a className="link link-hover">Fan Art</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Legal</h6> 
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
        </footer>
    );
};

export default Footer;