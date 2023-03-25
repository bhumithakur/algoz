import "./App.css";
import { Box, Button, Typography } from "@mui/material";
import bgImage from "./img/bgImage.jpg";
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
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 768px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            width: "50%",
            // border: "1px solid blue",
            padding: "0 5rem 0 12vw",
            "@media (max-width: 1000px)": {
              padding: "0 5rem 0 5vw",
            },
            "@media (max-width: 768px)": {
              padding: "6rem 2rem 0 2rem",
              width: "100%",
              height: "50%",
            },
          }}
        >
          <Box
            sx={{
              // border: "1px solid green",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              "@media (max-width: 768px)": {
                marginBottom: "1rem",
                justifyContent: "center",
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "72px",
                fontFamily: "Rubik",
                "@media (max-width: 1000px)": {
                  fontSize: "42px",
                },
                "@media (max-width: 768px)": {
                  fontSize: "32px",
                },
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
              "@media (max-width: 768px)": {
                marginBottom: "1rem",
                justifyContent: "center",
              },
            }}
          >
            <Typography
              variant="paragraph"
              align="left"
              sx={{
                color: "white",
                fontSize: "24px",
                fontFamily: "DM Sans",
                "@media (max-width: 1000px)": {
                  fontSize: "16px",
                },
                "@media (max-width: 768px)": {
                  fontSize: "12px",
                  textAlign: "center",
                },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
          </Box>
          <Box
            sx={{
              "@media (max-width: 768px)": {
                display: "flex",
                flexDirection: "column-reverse",
              },
            }}
          >
            <Box
              sx={{
                // border: "1px solid orange",
                display: "flex",
                // justifyContent: "space-aroun",
                alignItems: "center",
                marginBottom: "4rem",
                "@media (max-width: 768px)": {
                  marginBottom: "2rem",
                  justifyContent: "center",
                  flexDirection: "column",
                },
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
                  "@media (max-width: 1000px)": {
                    width: "40%",
                    height: "40px",
                    fontSize: "16px",
                  },
                  "@media (max-width: 768px)": {
                    marginRight: "0",
                    marginBottom: "1rem",
                    width: "85%",
                    height: "34px",
                    fontSize: "12px",
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
                  padding: "10px 20px",
                  "@media (max-width: 1000px)": {
                    width: "40%",
                    height: "40px",
                    fontSize: "14px",
                  },
                  "@media (max-width: 768px)": {
                    width: "85%",
                    height: "34px",
                    fontSize: "12px",
                  },
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
                "@media (max-width: 1000px)": {
                  fontSize: "16px",
                },
                "@media (max-width: 768px)": {
                  fontSize: "12px",
                  padding: "2rem 0",
                  width: "85%",
                  alignSelf: "center",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "2rem",
                  "@media (max-width: 768px)": {
                    justifyContent: "center",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "2rem",
                    "@media (max-width: 768px)": {
                      marginRight: "1rem",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "64px",
                      height: "64px",
                      marginRight: "1.5rem",
                      "@media (max-width: 768px)": {
                        width: "30px",
                        height: "30px",
                        marginRight: "0.5rem",
                      },
                    }}
                  >
                    <img
                      src={rectangle}
                      alt=""
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Box>
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
                  <Box
                    sx={{
                      display: "flex",
                      width: "64px",
                      height: "64px",
                      marginRight: "1.5rem",
                      "@media (max-width: 768px)": {
                        width: "30px",
                        height: "30px",
                        marginRight: "0.5rem",
                      },
                    }}
                  >
                    <img
                      src={rectangle}
                      alt=""
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Box>
                  <Typography variant="paragraph">
                    Lorem ipsum dolor sit amet
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "@media (max-width: 768px)": {
                    justifyContent: "center",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "2rem",
                    "@media (max-width: 768px)": {
                      marginRight: "1rem",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "64px",
                      height: "64px",
                      marginRight: "1.5rem",
                      "@media (max-width: 768px)": {
                        width: "30px",
                        height: "30px",
                        marginRight: "0.5rem",
                      },
                    }}
                  >
                    <img
                      src={rectangle}
                      alt=""
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Box>
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
                  <Box
                    sx={{
                      display: "flex",
                      width: "64px",
                      height: "64px",
                      marginRight: "1.5rem",
                      "@media (max-width: 768px)": {
                        width: "30px",
                        height: "30px",
                        marginRight: "0.5rem",
                      },
                    }}
                  >
                    <img
                      src={rectangle}
                      alt=""
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Box>
                  <Typography variant="paragraph">
                    Lorem ipsum dolor sit amet
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            // border: "1px solid red",
            // height: "100%",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            "@media (max-width: 1000px)": {
              padding: "0rem 0rem 3rem 0rem",
            },
            "@media (max-width: 768px)": {
              width: "100%",
              padding: "0rem 0rem 3rem 0rem",
            },
          }}
        >
          <img
            src={logo}
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          // width: "100vw",
          backgroundImage: `url(${bgCurve})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem 5rem",
          "@media (max-width: 1400px)": {
            padding: "5rem 0rem 5rem 2rem",
          },
          "@media (max-width: 768px)": {
            flexDirection: "column",
            padding: "5rem 0",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "55%",
            padding: "5rem 0 5rem 10rem",
            "@media (max-width: 1400px)": {
              padding: "5rem 0 5rem 2rem",
            },
            "@media (max-width: 768px)": {
              width: "100%",
              padding: "0rem 0",
            },
          }}
        >
          <Box>
            <Typography
              fontFamily={"Rubik"}
              fontSize={64}
              fontWeight={800}
              sx={{
                "@media (max-width: 1000px)": {
                  fontSize: 48,
                },
                "@media (max-width: 768px)": {
                  fontSize: 32,
                  textAlign: "center",
                },
              }}
            >
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
              // justifyContent: "center",
              marginBottom: "2rem",
              // border: "1px solid red",
              "@media (max-width: 768px)": {
                justifyContent: "center",
              },
            }}
          >
            <Typography
              fontFamily={"DM Sans"}
              fontSize={24}
              sx={{
                "@media (max-width: 1000px)": {
                  fontSize: 18,
                },
                "@media (max-width: 768px)": {
                  fontSize: 12,
                  textAlign: "center",
                },
              }}
            >
              {window.innerWidth > 769 ? (
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </>
              ) : (
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </>
              )}
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
                "@media (max-width: 768px)": {
                  justifyContent: "center",
                },
              }}
            >
              <Box
                sx={{
                  width: "64px",
                  height: "64px",
                  "@media (max-width: 768px)": {
                    width: "30px",
                    height: "30px",
                  },
                }}
              >
                <img
                  src={greyRect}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1.5rem",
                  "@media (max-width: 768px)": {
                    marginLeft: "0.5rem",
                  },
                }}
              >
                <Typography
                  variant="paragraph"
                  fontSize={24}
                  fontWeight={600}
                  sx={{
                    "@media (max-width: 1000px)": {
                      fontSize: 18,
                    },
                    "@media (max-width: 768px)": {
                      fontSize: 14,
                    },
                  }}
                >
                  1.2Cr/Year
                </Typography>
                <Typography
                  variant="paragraph"
                  fontSize={18}
                  sx={{
                    "@media (max-width: 1000px)": {
                      fontSize: 16,
                    },
                    "@media (max-width: 768px)": {
                      fontSize: 14,
                    },
                  }}
                >
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
                "@media (max-width: 768px)": {
                  justifyContent: "center",
                },
              }}
            >
              <Box
                sx={{
                  width: "64px",
                  height: "64px",
                  "@media (max-width: 768px)": {
                    width: "30px",
                    height: "30px",
                  },
                }}
              >
                <img
                  src={greyRect}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1.5rem",
                  "@media (max-width: 768px)": {
                    marginLeft: "0.5rem",
                  },
                }}
              >
                <Typography
                  variant="paragraph"
                  fontSize={24}
                  fontWeight={600}
                  sx={{
                    "@media (max-width: 1000px)": {
                      fontSize: 18,
                    },
                    "@media (max-width: 768px)": {
                      fontSize: 14,
                    },
                  }}
                >
                  Multiple &lt; 100 Ranks
                </Typography>
                <Typography
                  variant="paragraph"
                  fontSize={18}
                  sx={{
                    "@media (max-width: 1000px)": {
                      fontSize: 16,
                    },
                    "@media (max-width: 768px)": {
                      fontSize: 14,
                    },
                  }}
                >
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
                "@media (max-width: 768px)": {
                  justifyContent: "center",
                },
              }}
            >
              <Box
                sx={{
                  width: "64px",
                  height: "64px",
                  "@media (max-width: 768px)": {
                    width: "30px",
                    height: "30px",
                  },
                }}
              >
                <img
                  src={greyRect}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1.5rem",
                  "@media (max-width: 768px)": {
                    marginLeft: "0.5rem",
                  },
                }}
              >
                <Typography
                  variant="paragraph"
                  fontSize={24}
                  fontWeight={600}
                  sx={{
                    "@media (max-width: 1000px)": {
                      fontSize: 18,
                    },
                    "@media (max-width: 768px)": {
                      fontSize: 14,
                    },
                  }}
                >
                  1000+ Offers
                </Typography>
                <Typography
                  variant="paragraph"
                  fontSize={18}
                  sx={{
                    "@media (max-width: 1000px)": {
                      fontSize: 16,
                    },
                    "@media (max-width: 768px)": {
                      fontSize: 14,
                    },
                  }}
                >
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
                "@media (max-width: 768px)": {
                  justifyContent: "center",
                },
              }}
            >
              <Box
                sx={{
                  width: "64px",
                  height: "64px",
                  "@media (max-width: 768px)": {
                    width: "30px",
                    height: "30px",
                  },
                }}
              >
                <img
                  src={greyRect}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1.5rem",
                  "@media (max-width: 768px)": {
                    marginLeft: "0.5rem",
                  },
                }}
              >
                <Typography
                  variant="paragraph"
                  fontSize={24}
                  fontWeight={600}
                  sx={{
                    "@media (max-width: 1000px)": {
                      fontSize: 18,
                    },
                    "@media (max-width: 768px)": {
                      fontSize: 14,
                    },
                  }}
                >
                  Trusted by IITians
                </Typography>
                <Typography
                  variant="paragraph"
                  fontSize={18}
                  sx={{
                    "@media (max-width: 1000px)": {
                      fontSize: 16,
                    },
                    "@media (max-width: 768px)": {
                      fontSize: 14,
                    },
                  }}
                >
                  for their career prep
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "55%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "@media (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <Box
            sx={{
              width: "55%",
              // marginTop: "2rem",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.75)",
              "@media (max-width: 1400px)": {
                width: "75%",
              },
              "@media (max-width: 768px)": {
                width: "85%",
                boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.60)",
                margin: "2rem 0",
              },
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
                  "@media (max-width: 1000px)": {
                    marginLeft: "1.5rem",
                  },
                  "@media (max-width: 768px)": {
                    marginLeft: "1rem",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "DM Sans",
                    fontSize: "21px",
                    "@media (max-width: 100px)": {
                      fontSize: "16px",
                    },
                    "@media (max-width: 768px)": {
                      fontSize: "12px",
                    },
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
                    "@media (max-width: 1000px)": {
                      fontSize: "32px",
                    },
                    "@media (max-width: 768px)": {
                      fontSize: "24px",
                    },
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
                    "@media (max-width: 1000px)": {
                      fontSize: "40px",
                    },
                    "@media (max-width: 768px)": {
                      fontSize: "32px",
                    },
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
                  borderRadius: "0 1rem 0 0",
                  "@media (max-width: 1000px)": {
                    height: "160px",
                  },
                  "@media (max-width: 768px)": {
                    height: "140px",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                backgroundImage: `url(${pricing})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // height: "70%",
                width: "100%",
                borderRadius: "0 0 1rem 1rem",
              }}
            >
              <Box
                sx={{
                  // border: "2px solid red",
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "space-between",
                  alignItems: "flex-start",
                  height: "100%",
                  fontFamily: "DM Sans",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2rem 2rem 0rem 2rem",
                    "@media (max-width: 768px)": {
                      margin: "1.5rem 0rem 0rem 1rem",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "1rem",
                      width: "64px",
                      height: "64px",
                      "@media (max-width: 1000px)": {
                        width: "40px",
                        height: "40px",
                        marginRight: "0.5rem",
                      },
                      "@media (max-width: 768px)": {
                        width: "30px",
                        height: "30px",
                        marginRight: "1rem",
                      },
                    }}
                  >
                    <img
                      src={rectangle}
                      alt=""
                      style={{
                        marginRight: "1.2rem",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="paragraph"
                    fontSize={22}
                    sx={{
                      "@media (max-width: 1000px)": {
                        fontSize: "16px",
                      },
                      "@media (max-width: 768px)": {
                        fontSize: "12px",
                      },
                    }}
                  >
                    100+ Hrs Live Content
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2rem 2rem 0rem 2rem",
                    "@media (max-width: 768px)": {
                      margin: "1.5rem 0rem 0rem 1rem",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "1rem",
                      width: "64px",
                      height: "64px",
                      "@media (max-width: 1000px)": {
                        width: "40px",
                        height: "40px",
                        marginRight: "0.5rem",
                      },
                      "@media (max-width: 768px)": {
                        width: "30px",
                        height: "30px",
                        marginRight: "1rem",
                      },
                    }}
                  >
                    <img
                      src={rectangle}
                      alt=""
                      style={{
                        marginRight: "1.2rem",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="paragraph"
                    fontSize={22}
                    sx={{
                      "@media (max-width: 1000px)": {
                        fontSize: "16px",
                      },
                      "@media (max-width: 768px)": {
                        fontSize: "12px",
                      },
                    }}
                  >
                    50+ Hrs Contest
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2rem 2rem 0rem 2rem",
                    "@media (max-width: 768px)": {
                      margin: "1.5rem 0rem 0rem 1rem",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "1rem",
                      width: "64px",
                      height: "64px",
                      "@media (max-width: 1000px)": {
                        width: "40px",
                        height: "40px",
                        marginRight: "0.5rem",
                      },
                      "@media (max-width: 768px)": {
                        width: "30px",
                        height: "30px",
                        marginRight: "1rem",
                      },
                    }}
                  >
                    <img
                      src={rectangle}
                      alt=""
                      style={{
                        marginRight: "1.2rem",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="paragraph"
                    fontSize={22}
                    sx={{
                      "@media (max-width: 1000px)": {
                        fontSize: "16px",
                      },
                      "@media (max-width: 768px)": {
                        fontSize: "12px",
                      },
                    }}
                  >
                    500+ Problems
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2rem 2rem 0rem 2rem",
                    "@media (max-width: 768px)": {
                      margin: "1.5rem 0rem 0rem 1rem",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "1rem",
                      width: "64px",
                      height: "64px",
                      "@media (max-width: 1000px)": {
                        width: "40px",
                        height: "40px",
                        marginRight: "0.5rem",
                      },
                      "@media (max-width: 768px)": {
                        width: "30px",
                        height: "30px",
                        marginRight: "1rem",
                      },
                    }}
                  >
                    <img
                      src={rectangle}
                      alt=""
                      style={{
                        marginRight: "1.2rem",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="paragraph"
                    fontSize={22}
                    sx={{
                      "@media (max-width: 1000px)": {
                        fontSize: "16px",
                      },
                      "@media (max-width: 768px)": {
                        fontSize: "12px",
                      },
                    }}
                  >
                    Includes an interview bootcamp
                    <br />
                    and access to a mentor network
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2rem 2rem 0rem 2rem",
                    "@media (max-width: 768px)": {
                      margin: "1.5rem 0rem 0rem 1rem",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "1rem",
                      width: "64px",
                      height: "64px",
                      "@media (max-width: 1000px)": {
                        width: "40px",
                        height: "40px",
                        marginRight: "0.5rem",
                      },
                      "@media (max-width: 768px)": {
                        width: "30px",
                        height: "30px",
                        marginRight: "1rem",
                      },
                    }}
                  >
                    <img
                      src={rectangle}
                      alt=""
                      style={{
                        marginRight: "1.2rem",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="paragraph"
                    fontSize={21}
                    sx={{
                      "@media (max-width: 1000px)": {
                        fontSize: "16px",
                      },
                      "@media (max-width: 768px)": {
                        fontSize: "12px",
                      },
                    }}
                  >
                    Enjoy access to our content for one
                    <br />
                    year (paid extensions available)
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2rem 0rem 2rem 2rem",
                    "@media (max-width: 768px)": {
                      margin: "1.5rem 0rem 1.5rem 1rem",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "1rem",
                      width: "64px",
                      height: "64px",
                      "@media (max-width: 1000px)": {
                        width: "40px",
                        height: "40px",
                        marginRight: "0.5rem",
                      },
                      "@media (max-width: 768px)": {
                        width: "30px",
                        height: "30px",
                        marginRight: "1rem",
                      },
                    }}
                  >
                    <img
                      src={rectangle}
                      alt=""
                      style={{
                        marginRight: "1.2rem",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="paragraph"
                    fontSize={22}
                    sx={{
                      "@media (max-width: 1000px)": {
                        fontSize: "16px",
                      },
                      "@media (max-width: 768px)": {
                        fontSize: "12px",
                      },
                    }}
                  >
                    Flexible payment options, including
                    <br /> no-cost EMI, are available.
                  </Typography>
                </Box>
                <Button
                  sx={{
                    width: "90%",
                    height: "3rem",
                    borderRadius: "8px",
                    background: "white",
                    color: "#043C53",
                    fontSize: "22px",
                    textTransform: "none",
                    fontFamily: "DM Sans",
                    margin: "0rem 0rem 2rem 1.5rem",
                    ":hover": {
                      background: "#043C53",
                      color: "white",
                    },
                    "@media (max-width: 768px)": {
                      fontSize: "12px",
                      margin: "0rem 0rem 2rem 1.5rem",
                      width: "90%",
                      height: "34px",
                    },
                  }}
                >
                  Join Now &#129122;
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
