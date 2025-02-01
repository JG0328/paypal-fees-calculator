import { Divider, Typography } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Divider sx={{ m: 2 }} />
            <Typography component={"p"} variant={"body2"} align="center">
                &copy;2025 Gammes
            </Typography>
        </footer>
    )
}

export default Footer;
