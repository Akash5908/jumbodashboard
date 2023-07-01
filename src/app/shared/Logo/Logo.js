import React from 'react';
import Div from "@jumbo/shared/Div";
import Link from "@mui/material/Link";
import { ASSET_IMAGES } from "../../utils/constants/paths";

const Logo = ({ mini, mode, sx }) => {
  return (
    <Div sx={{ display: "inline-flex", ...sx }}>
      <Link href={'/dashboards/misc'}>
        {
          !mini ? (
            <img src={mode === "light" ? 'https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png' : 'https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png'} alt="Jumbo React"  style={{width: '100px', height: '100px', objectFit: 'contain', borderRadius: '50%', ...sx}}/>
          ) : (
            <img src={mode === "light" ? 'https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png' : 'https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png'} alt="Jumbo React" />
          )
        }
      </Link>
    </Div>
  );
};

Logo.defaultProps = {
  mode: "light"
};

export default Logo;
