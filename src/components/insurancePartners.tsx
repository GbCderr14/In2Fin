// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import { Box, Typography } from "@mui/material";
import insurancePartner1 from "./../assets/svgs/insurancePartner1.svg";
import insurancePartner2 from "./../assets/svgs/insurancePartner2.svg";
import insurancePartner3 from "./../assets/svgs/insurancePartner3.svg";
import insurancePartner4 from "./../assets/svgs/insurancePartner4.svg";
import insurancePartner5 from "./../assets/svgs/insurancePartner5.svg";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function InsurancePartners() {
  const partners = [
    {
      id: 1,
      image_src: insurancePartner1,
    },
    {
      id: 2,
      image_src: insurancePartner2,
    },
    {
      id: 3,
      image_src: insurancePartner3,
    },
    {
      id: 4,
      image_src: insurancePartner4,
    },
    {
      id: 5,
      image_src: insurancePartner5,
    },
  ];
  return (
    <>
      <Box style={{ height: "10vh" }} />
      <Box style={{ backgroundColor: "#EBF6FF" }}>
        <Box style={{ height: "5vh" }} />
        <Typography style={{ fontFamily: "Poppins", letterSpacing: "0.28rem" }}>
          OUR INSURANCE PARTNERS
        </Typography>
        <Carousel
          swipeable={false}
          responsive={responsive}
          centerMode={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={700}
          keyBoardControl={true}
          showDots={false}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {partners.map((slide) => (
            <img
              src={slide.image_src}
              alt="partner"
              height="150vh"
              width="150vh"
            />
          ))}
        </Carousel>
      </Box>
    </>
  );
}

export default InsurancePartners;
