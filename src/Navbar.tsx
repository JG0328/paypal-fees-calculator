import {AppBar, Toolbar, Typography} from "@mui/material";
import logo from "./paypal-logo.png";

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <img src={logo} alt={"PayPal Logo"} width={28}/>
                <Typography variant={"h6"} component={"div"} sx={{ml: 2, fg: 1}}>
                    Paypal Fees Calculator
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;