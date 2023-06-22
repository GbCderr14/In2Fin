import { Box, Grid, Typography } from "@mui/material";
import InvertedComma from "./../assets/svgs/invertedComma.svg";
import Akshat from './../assets/svgs/akshat.svg';
import Deepinder from './../assets/svgs/deepinder.svg';

function Testimonial() {


    const testimonials = [
        {
            profile: Deepinder,
            user_name: "Deepinder Goyal",
            position: "CEO@zomato",
            review: "From the very beginning, their expert were friendly and knowledgeable, taking the time to explain all of my options and helping me find the coverage that was right for me. They were patient and thorough in answering all of my questions and never made me feel rushed or pressured."
        },
        {
            profile: Akshat,
            user_name: "Akshat Jain",
            position: "Product Manager @Google",
            review: "Overall, I am extremely satisfied with my experience with [Insurance Company] and would highly recommend them to anyone in need of insurance services. Thank you for providing excellent service and peace of mind!",
        },
    ]

    return <>
        <Box style={{ backgroundColor: "#00223C", textAlign: "left" }}>
            <Grid container>
                <Grid item lg={1} md={2} sm={1} xs={0.5} />
                <Grid item lg={3.5} md={4} sm={10.2} xs={11}>
                    <Box style={{ height: "15vh" }} />
                    <Typography
                        style={{
                            color: "white",
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            fontSize: "36px",
                            lineHeight: "54px",
                            textTransform: "none",
                        }}
                    >
                        Our Customer Speaks For Us
                    </Typography>
                    <Box style={{ height: "8vh" }} />
                    <img src={InvertedComma} alt='"' />
                    <Box style={{ height: "4vh" }} />
                    <Box style={{ width: "100%" }}>
                        <Box style={{ width: "100%" }}>
                            <Typography style={{
                                fontFamily: "Poppins",
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "32px",
                                color: "white",
                            }}>{testimonials[0].review}</Typography>
                            <Box style={{ height: "3vh" }} />
                            <Box style={{ display: "flex" }}>
                                <img src={testimonials[0].profile} alt='User Photo' />
                                <Box style={{ width: "10px" }}></Box>
                                <Box style={{ display: "flex", flexDirection: "column" }}>
                                    <Typography style={{
                                        fontFamily: "Poppins",
                                        fontWeight: "600",
                                        fontSize: "16px",
                                        lineHeight: "32px",
                                        color: "white",
                                    }}>{testimonials[0].user_name}</Typography>
                                    <Typography style={{
                                        fontFamily: "Poppins",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "32px",
                                        color: "white",
                                    }}>{testimonials[0].position}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={1.5} md={1.5} sm={0.9} xs={0.9}/>
                <Grid item lg={4} md={4} sm={10} xs={10}>
                    <Box style={{ height: "6vh" }} />
                    {testimonials.map((testimonial)=>{
                        return <><Box style={{ width: "100%",backgroundColor:"white",padding:"15px 25px",borderRadius:"20px" }}>
                        <img src={InvertedComma} alt='"' />
                        <Box style={{ height: "2vh" }} />
                            <Box style={{ width: "100%" }}>
                                <Typography style={{
                                    fontFamily: "Poppins",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                }}>{testimonial.review}</Typography>
                                <Box style={{ height: "3vh" }} />
                                <Box style={{ display: "flex" }}>
                                    <img src={testimonial.profile} alt='User Photo' />
                                    <Box style={{ width: "10px" }}></Box>
                                    <Box style={{ display: "flex", flexDirection: "column" }}>
                                        <Typography style={{
                                            fontFamily: "Poppins",
                                            fontWeight: "600",
                                            fontSize: "14px",
                                            lineHeight: "30px",
                                            color: "black",
                                        }}>{testimonial.user_name}</Typography>
                                        <Typography style={{
                                            fontFamily: "Poppins",
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            lineHeight: "30px",
                                            color: "black",
                                        }}>{testimonial.position}</Typography>
                                    </Box>
                                </Box>
                                <Box style={{height:"3vh"}}/>
                            </Box>
                        </Box>
                            <Box style={{height:"3vh"}}/>
                        </>
                    })}
                    
                </Grid>
                <Grid item lg={2} md={2} sm={1} xs={1} />
            </Grid>
            {/* <Box style={{ height: "2vh" }} /> */}

        </Box>
    </>
}

export default Testimonial;