import { Box, Button, Grid, Typography } from "@mui/material";
import Navbar from "./navbar/navbar";
import UnderLine from "./../assets/svgs/underline.svg";
import Car from "./../assets/svgs/carIcon.svg";
import Health from "./../assets/svgs/healthcareIcon.svg";
import Bike from "./../assets/svgs/bikeIcon.svg";
import Loan from "./../assets/svgs/personalLoanIcon.svg";
import Credit from "./../assets/svgs/creditIcon.svg";
import UploadFile from "./../assets/svgs/uploadFileIcon.svg";
import Advantage from "./advantages";
import InsurancePartners from "./insurancePartners";
import handWithPaper from "./../assets/svgs/handWithPaper.svg";
import analyze from "./../assets/svgs/analyzePolicy.svg";
import UploadFileBig from "./../assets/svgs/uploadFileBig.svg";
import Testimonial from "./testimonial";
function LandingPage() {
    const data2 = [
        {
            img_src: UploadFileBig,
            title: "Upload Your Policy",
        },
        {
            img_src: analyze,
            title: "Let Us Analyze The Policy",
        },
        {
            img_src: handWithPaper,
            title: "Get Advice From Our Experts",
        },
    ];
    const cards = [
        {
            image_src: Car,
            Heading: "Car",
            Description: "Insurance",
        },
        {
            image_src: Health,
            Heading: "Health",
            Description: "Insurance",
        },
        {
            image_src: Bike,
            Heading: "Bike",
            Description: "Insurance",
        },
        {
            image_src: Loan,
            Heading: "Personal",
            Description: "Loan",
        },
        {
            image_src: Credit,
            Heading: "Credit",
            Description: "Cards",
        },
    ];
    return (
        <>
            <Navbar />
            <Box style={{ height: "30px" }} />
            <Box>
                <Grid container style={{ position: "relative" }}>
                    <Grid item lg={1} md={1} sm={1} xs={1}/>
                    <Grid item lg={4.8} md={4.8} sm={11} xs={11}>
                        <Box style={{ height: "15vh" }} />
                        <Box style={{ height: "90%" }}>
                            <Typography
                                style={{
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    fontSize: "2.5rem",
                                }}
                            >
                                Your One-Stop Solution  <UnderlineWords label="Financial" afterWord="Needs" beforeWord="For" />
                            </Typography>
                            <Box style={{ height: "2vh" }} />
                            <Typography
                                style={{
                                    fontFamily: "Poppins",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    lineHeight: "32px",
                                }}
                            >
                                we're here to simplify the process for you. As a leading
                                insurance broker, we offer a wide range of insurance solutions
                                to help protect what matters most to you
                            </Typography>
                            <Box style={{ height: "8vh" }} />
                            <Grid container>
                                {cards.map((card) => {
                                    return (
                                        <>
                                            <Grid item lg={1.9} md={1.9} sm={1.9}>
                                                <Button
                                                    style={{ textTransform: "none", color: "black" }}
                                                >
                                                    <Box
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <Box style={{ width: "20px" }} />
                                                        <Box
                                                            style={{
                                                                backgroundColor: "rgb(232 232 242)",
                                                                padding: 10,
                                                                width: "80px",
                                                                height: "90px",
                                                                borderRadius: "6px",
                                                            }}
                                                        >
                                                            <img
                                                                src={card.image_src}
                                                                alt="nothing"
                                                                width="30px"
                                                                height="30px"
                                                            />
                                                            <Typography
                                                                style={{
                                                                    fontFamily: "Poppins",
                                                                    fontWeight: "600",
                                                                    fontSize: "0.8rem",
                                                                }}
                                                            >
                                                                {card.Heading}
                                                            </Typography>
                                                            <Typography
                                                                style={{
                                                                    fontFamily: "Poppins",
                                                                    fontWeight: "400",
                                                                    fontSize: "0.8rem",
                                                                }}
                                                            >
                                                                {card.Description}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Button>
                                            </Grid>
                                            <Grid item lg={0.5} />
                                        </>
                                    );
                                })}
                            </Grid>
                            <Box style={{ height: "50px" }}></Box>
                                    <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                        {/* <Box style={{width:"20px"}}/> */}
                                    <Button
                                        style={{
                                            padding: "16px 24px",
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
                                    <Box style={{ height: "10px" }}></Box>
                                    <Box style={{width:"13px"}}></Box>
                                    <Typography
                                        style={{
                                            fontFamily: "Poppins",
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}
                                    >
                                        Or
                                    </Typography>
                                    <Box style={{ width: "13px" }}></Box>
                                    <Button
                                        style={{
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
                                    <Box style={{width:"120px"}}/>
                                    </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={2} md={0.3} sm={1} xs={1} />
                    <Grid item lg={4} md={5} sm={11} xs={11}>
                        <Box style={{ height: "60px" }} />
                        <img src="Mobile.png" alt="Mobile" height="530vh" />
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ height: "60px" }} />
            <Box style={{ textAlign: "center" }}>
                <Typography
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        fontSize: "36px",
                        lineHeight: "54px",
                        textTransform: "none",
                    }}
                >
                    Advantages with In2Fin
                </Typography>
                <Box style={{ height: "60px" }} />
                <Advantage />
                <InsurancePartners />
                <Box style={{ backgroundColor: "white" }}>
                    <Box style={{ height: "15vh" }} />
                    <Typography
                        style={{
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            fontSize: "36px",
                            lineHeight: "54px",
                            textTransform: "none",
                        }}
                    >
                        Easy Steps to Buy & Renew your Policy
                    </Typography>
                    <Box style={{ height: "10vh" }} />
                    <Grid container>
                        {data2.map((data) => {
                            return (
                                <>
                                    <Grid item lg={0.5} md={0.5} sm={0.5} xs={1} />
                                    <Grid item lg={3} md={3} sm={3} xs={10} style={{ padding: "6px 0px" }}>
                                        <Box
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                textAlign: "center",
                                                backgroundColor: "rgb(253, 243, 243)",
                                                borderRadius: "24px",
                                                alignItems: "center",
                                                // height: "320px",
                                            }}
                                        >
                                            <Box style={{ height: "2vh" }} />
                                            <img src={data.img_src} alt="nothing" />
                                            <Box style={{ width: "90%" }}>
                                                <Box style={{ height: "4vh" }} />
                                                <Typography
                                                    style={{
                                                        fontFamily: "Poppins",
                                                        fontWeight: "600",
                                                        fontSize: "1.2rem",
                                                        height: "",
                                                    }}
                                                >
                                                    {data.title}
                                                </Typography>
                                                <Box style={{ height: "2vh" }} />
                                                <Typography
                                                    style={{
                                                        fontFamily: "Poppins",
                                                        fontWeight: "400",
                                                        fontSize: "0.9rem",
                                                    }}
                                                >
                                                    {" "}
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing
                                                    elit. Eligendi, voluptas.
                                                </Typography>
                                                <Box style={{ height: "2vh" }} />
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={0.5} md={0.5} sm={0.5} xs={1} />
                                </>
                            );
                        })}
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            style={{ textAlign: "center" }}
                        >
                            <Box style={{ height: "12vh" }} />
                            <Button
                                style={{
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
                        </Grid>
                    </Grid>
                    <Box style={{ height: "10vh" }} />
                    <Testimonial />
                    <Box style={{ height: "15vh" }} />
                </Box>
            </Box>
        </>
    );
}

function UnderlineWords(props: { label: string, afterWord: string,beforeWord:string }) {
    return (
        <>
            <Box style={{ display: "flex" }}>
            <Box>{props.beforeWord}&nbsp;</Box>
                <Box style={{ display: "flex", flexDirection: "column",width:"190px" }}>
                    <Typography
                        style={{
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            fontSize: "2.5rem",
                            display: "inline-block"
                        }}
                    >
                        {props.label}
                    </Typography>
                    <img src={UnderLine} alt="nothing" width="90%" />
                </Box>
                <Box >{props.afterWord}</Box>
            </Box>
        </>
    );
}
export default LandingPage;
