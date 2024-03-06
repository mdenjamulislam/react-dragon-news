import moment from "moment";
import Logo from "../../assets/images/logo.png";
const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-5">
            <div>
                <img src={Logo} alt="Dragon News" className="h-auto w-auto" />
            </div>
            <div className="space-y-2 text-center">
                <p>Journalism Without Fear or Favour</p>
                <p className="font-medium">
                    {moment().format("dddd, MMMM, YYYY")}
                </p>
            </div>
        </div>
    );
};

export default Header;
