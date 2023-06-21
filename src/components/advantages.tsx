import { Box, Button, Grid, Typography } from "@mui/material";
import UploadFile from "./../assets/svgs/uploadFileIcon.svg";

const advantage = [
  {
    img_src: "./Banknames.png",
    title: "Single Platform For All Your Financial Needs",
    description:
      "we are here to simplify the process for you.As a leading insurance broker",
    buttonType: "primary",
    buttonText: "Get A Expert Call",
  },
  {
    img_src: "./AnalyzePolicy.png",
    title: "Know Your Policy",
    description:
      "we are here to simplify the process for you.As a leading insurance broker",
    buttonType: "secondary",
    buttonText: "Know your policy",
  },
  {
    img_src: "./Experts.png",
    title: "Get Expert Advice",
    description:
      "we are here to simplify the process for you.As a leading insurance broker",
    buttonType: "primary",
    buttonText: "Get A Expert Call",
  },
];
function Advantage() {
  return (
    <>
      <Grid container>
        {advantage.map((advantage) => {
          return (
            <>
              <Grid item lg={0.5} md={0.5} sm={0.5} xs={1} />
              <Grid item lg={3} md={3} sm={3} xs={10} style={{padding:"6px 0px"}}>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    backgroundColor: "white",
                    alignItems: "center",
                    height: "97%",
                  }}
                >
                  <img
                    src={advantage.img_src}
                    alt="nothing"
                    width="100%"
                  />
                  <Box style={{ width: "90%" }}>
                    <Box style={{ height: "2vh" }} />
                    {(advantage.buttonType === "secondary" ||
                      advantage.title === "Get Expert Advice") && (
                      <Box style={{ height: "4vh" }} />
                    )}
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        fontSize: "1.2rem",
                        height: "",
                      }}
                    >
                      {advantage.title}
                    </Typography>
                    <Box style={{ height: "2vh" }} />
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        fontSize: "0.9rem",
                      }}
                    >
                      {advantage.description}
                    </Typography>
                    <Box style={{ height: "2vh" }} />
                    {advantage.buttonType === "primary" ? (
                      <Button
                        style={{
                          width: "70%",
                          padding: "12px 24px",
                          background: "#0691FC",
                          borderRadius: "8px",
                          color: "white",
                          fontFamily: "Poppins",
                          fontWeight: "600",
                          textTransform: "none",
                        }}
                      >
                        Get a Expert Call
                      </Button>
                    ) : (
                      <Button
                        style={{
                          width: "90%",
                          padding: "16px 24px",
                          background: "#E6F4FF",
                          border: "1.5px dashed #0691FC",
                          borderRadius: "8px",
                          color: "#0691FC",
                          fontFamily: "Poppins",
                          fontWeight: "600",
                          textTransform: "none",
                        }}
                      >
                        <img src={UploadFile} alt="uploadFileIcon" />
                        &nbsp;Know Your Policy
                      </Button>
                    )}
                    <Box style={{ height: "4vh" }} />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={0.5} md={0.5} sm={0.5} xs={1} />
              <Box style={{ height: "2vh" }} />
            </>
          );
        })}
      </Grid>
    </>
  );
}

export default Advantage;
