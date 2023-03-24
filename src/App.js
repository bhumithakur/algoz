import "./App.css";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import bgImage from "./img/bgImage.png";
import logo from "./img/logo.png";
import rectangle from "./img/rectangle.svg";
import bgCurve from "./img/bgCurve.svg";
import halfAlgo from "./img/halfAlgo.svg";
import pricing from "./img/Pricing.png";
import greyRect from "./img/greyRect.svg";

function App() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "50%",
            // border: "1px solid blue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 5rem 0 15rem",
          }}
        >
          <Box
            sx={{
              // border: "1px solid green",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "4rem",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "72px",
                fontFamily: "Rubik",
              }}
            >
              Be Better at DSA & CP
            </Typography>
          </Box>
          <Box
            sx={{
              // border: "1px solid purple",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "4rem",
            }}
          >
            <Typography
              variant="paragraph"
              align="left"
              sx={{
                color: "white",
                fontSize: "24px",
                fontFamily: "DM Sans",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
          </Box>
          <Box
            sx={{
              // border: "1px solid orange",
              display: "flex",
              // justifyContent: "space-aroun",
              alignItems: "center",
              marginBottom: "4rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "235px",
                height: "64px",
                backgroundColor: "white",
                color: "black",
                fontSize: "22px",
                fontFamily: "DM Sans",
                fontWeight: "bold",
                padding: "10px 20px",
                textTransform: "none",
                marginRight: "2rem",
                ":hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Join now &#129122;
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "235px",
                height: "64px",
                background: "linear-gradient(94.24deg, #033042, #005c83)",
                color: "white",
                fontSize: "22px",
                fontFamily: "DM Sans",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              View curriculum
            </Button>
          </Box>
          <Box
            sx={{
              // border: "1px solid yellow",
              display: "flex",
              flexDirection: "column",
              color: "white",
              fontSize: "24px",
              fontFamily: "DM Sans",
            }}
          >
            <Box
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "2rem",
                }}
              >
                <img
                  src={rectangle}
                  alt=""
                  style={{
                    marginRight: "1.5rem",
                  }}
                />
                <Typography variant="paragraph">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={rectangle}
                  alt=""
                  style={{
                    marginRight: "1.5rem",
                  }}
                />
                <Typography variant="paragraph">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "2rem",
                }}
              >
                <img
                  src={rectangle}
                  alt=""
                  style={{
                    marginRight: "1.5rem",
                  }}
                />
                <Typography variant="paragraph">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={rectangle}
                  alt=""
                  style={{
                    marginRight: "1.5rem",
                  }}
                />
                <Typography variant="paragraph">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "1px solid red",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          // height: "100vh",
          backgroundImage: `url(${bgCurve})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem 5rem",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "55%",
            padding: "5rem 0 5rem 10rem",
          }}
        >
          <Box>
            <Typography fontFamily={"Rubik"} fontSize={64} fontWeight={800}>
              Invest in skills, <br />
              <span
                style={{
                  color: "#005C83",
                }}
              >
                earn 10X
              </span>{" "}
              of what you paid.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Typography fontFamily={"DM Sans"} fontSize={24}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginBottom: "2rem",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: "DM Sans",
                width: "50%",
              }}
            >
              <img src={greyRect} alt="" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1.5rem",
                }}
              >
                <Typography variant="paragraph" fontSize={24} fontWeight={600}>
                  1.2Cr/Year
                </Typography>
                <Typography variant="paragraph" fontSize={18}>
                  highest fresher package
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: "DM Sans",
                width: "50%",
              }}
            >
              <img src={greyRect} alt="" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1.5rem",
                }}
              >
                <Typography variant="paragraph" fontSize={24} fontWeight={600}>
                  Multiple &lt; 100 Ranks
                </Typography>
                <Typography variant="paragraph" fontSize={18}>
                  in kickstart last year
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: "DM Sans",
                width: "50%",
              }}
            >
              <img src={greyRect} alt="" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1.5rem",
                }}
              >
                <Typography variant="paragraph" fontSize={24} fontWeight={600}>
                  1000+ Offers
                </Typography>
                <Typography variant="paragraph" fontSize={18}>
                  from top companies
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: "DM Sans",
                width: "50%",
              }}
            >
              <img src={greyRect} alt="" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1.5rem",
                }}
              >
                <Typography variant="paragraph" fontSize={24} fontWeight={600}>
                  Trusted by IITians
                </Typography>
                <Typography variant="paragraph" fontSize={18}>
                  for their career prep
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "45%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "55%",
              margin: "2rem 0",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.75)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "30%",
              }}
            >
              <Box
                sx={{
                  marginLeft: "1.5rem",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "DM Sans",
                    fontSize: "21px",
                  }}
                >
                  Premium Victory Batch
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Rubik",
                    fontSize: "50px",
                    fontWeight: "700",
                    textDecorationLine: "line-through",
                    color: "#818181",
                  }}
                >
                  &#8377;19,999
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Rubik",
                    fontSize: "64px",
                    fontWeight: "700",
                    background:
                      "linear-gradient(90deg, #3F6FC1 0%, #05445E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  &#8377;13999
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundImage: `url(${halfAlgo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "200px",
                  width: "50%",
                }}
              />
            </Box>
            <Box>
              <img
                src={pricing}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "0 0 1rem 1rem",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;

{
  /* <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2rem 2rem",
                }}
              >
                <img src={rectangle} alt="" />
                <Typography variant="paragraph">
                  100+ Hrs Live Content
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2rem 2rem",
                }}
              >
                <img src={rectangle} alt="" />
                <Typography variant="paragraph">50+ Hrs Contest</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2rem 2rem",
                }}
              >
                <img src={rectangle} alt="" />
                <Typography variant="paragraph">500+ Problems</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2rem 2rem",
                }}
              >
                <img src={rectangle} alt="" />
                <Typography variant="paragraph">
                  Includes an interview bootcamp and access to a mentor network
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2rem 2rem",
                }}
              >
                <img src={rectangle} alt="" />
                <Typography variant="paragraph">
                  Enjoy access to our content for one year <br />
                  (paid extensions available)
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2rem 2rem",
                }}
              >
                <img src={rectangle} alt="" />
                <Typography variant="paragraph">
                  Flexible payment options, including no-cost EMI, are available
                </Typography>
              </Box> */
}
{
  /* <Button>
                <Typography variant="paragraph">Join now</Typography>
              </Button> */
}
