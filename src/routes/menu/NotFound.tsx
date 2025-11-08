import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import MoonCloudMidRain from "../../assets/Moon-cloud-mid-rain.png";

export const NotFound = () => {
    return (
        <Box sx={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
            <Box
                component="img"
                loading='lazy'
                src={MoonCloudMidRain}
                alt="Moon Cloud Mid Rain"
                sx={{
                    margin: 'auto',
                    marginBottom: '-20%',
                    height: "250px",
                    width: "250px",
                }}
            />
            Sorry, the page you were looking for was not found.
            <div>
                <Link to={'/'}>Return to home</Link>
            </div>
        </Box>
    )
}
