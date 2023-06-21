import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import animation from "../../assets/gifs/moneyOnHand.json";
import { useLottie } from "lottie-react";
import UserIcon from "./../../assets/svgs/userIcon.svg";
import styles from "./navbar.module.css";
function Navbar() {
  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <>
      <AppBar elevation={0} position="fixed" sx={{ backgroundColor: "#fff" }}>
        <Toolbar className={styles.horizontalView}>
          <Box component={"img"} src="./logo.svg" height={50} />
          <Box className={styles.horizontalView}>
            <Button style={{}}>
              <CustomTypography label="We are hiring &nbsp; &nbsp;" />
            </Button>
            <Button
              style={{
                background: "rgba(6, 145, 252, 0.1)",
                borderRadius: "8px",
                height: "48px",
              }}
            >
              <Box component="span" sx={{ height: "28px", width: "22.5px" }}>
                {View}
              </Box>
              <CustomTypography label="Become a partner &nbsp;" />
            </Button>
            <Button style={{}}>
              <CustomTypography label="&nbsp;Contact Us &nbsp; " />
            </Button>
          </Box>
          <Box className={styles.horizontalView}>
            <Button>
              <img src={UserIcon} alt="React Logo" />
              <CustomTypography label=" &nbsp;Partner Login &nbsp;" />
            </Button>
            <Button
              style={{
                width: "150px",
                height: "53px",
                background: "#0691FC",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "21px",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                Get a Expert Call
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

function CustomTypography(props: { label: string }) {
  return (
    <Typography
      style={{
        textTransform: "none",
        fontFamily: "Poppins",
        fontWeight: "600",
        lineHeight: "21px",
        fontSize: "16px",
        color: "#333333",
      }}
    >
      {props.label}
    </Typography>
  );
}

export default Navbar;
