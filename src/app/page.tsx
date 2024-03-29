"use client";
import Image from "next/image";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Switch,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import isImage from "../../public/images/is.jpg";
import isDarkImage from "../../public/images/is-dark.jpg";
import clrsImage from "../../public/images/clrs.jpg";
import clrsDarkImage from "../../public/images/clrs-dark.jpg";
import cmImage from "../../public/images/cm.jpg";
import cmDarkImage from "../../public/images/cm-dark.jpg";
import tiImage from "../../public/images/taskit.jpg";
import tiDarkImage from "../../public/images/taskit-dark.jpg";
import rgImage from "../../public/images/rg.jpg";
import rgDarkImage from "../../public/images/rg-dark.jpg";
import swImage from "../../public/images/sw.jpg";
import swDarkImage from "../../public/images/sw-dark.png";
import typhImage from "../../public/images/typhon.png";
import tpyhDarkImage from "../../public/images/typhon-dark.png";
import kcLogo from "../../public/images/kc.jpg";
import kcDarkLogo from "../../public/images/kc-dark.jpg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import resume from "../../public/documents/resume.pdf";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#383838",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#0d0d0d"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "white" : "#383838",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#e7e7e7"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#f7f7f7",
    borderRadius: 20 / 2,
  },
}));

const projects = [
  {
    name: "RentGo",
    image: rgImage,
    darkImage: rgDarkImage,
    link: "https://rent-go.ca",
  },
  {
    name: "Typhon",
    image: typhImage,
    darkImage: tpyhDarkImage,
    link: "https://aegismapping.com/typhon",
  },
  {
    name: "Kazi Consulting",
    image: kcLogo,
    darkImage: kcDarkLogo,
    link: "https://kazi.consulting/",
  },
  {
    name: "InvestorSpace",
    image: isImage,
    darkImage: isDarkImage,
    link: "https://github.com/UmerKazi/InvestorSpace",
  },
  {
    name: "CLRS.io",
    image: clrsImage,
    darkImage: clrsDarkImage,
    link: "https://github.com/UmerKazi/CLRS.io",
  },
  {
    name: "ChatMonkey",
    image: cmImage,
    darkImage: cmDarkImage,
    link: "https://github.com/UmerKazi/ChatMonkey",
  },
  {
    name: "Taskit",
    image: tiImage,
    darkImage: tiDarkImage,
    link: "https://github.com/UmerKazi/Taskit",
  },
  {
    name: "SplitWash",
    image: swImage,
    darkImage: swDarkImage,
    link: "https://github.com/UmerKazi/SplitWash",
  },
];

export default function Home() {
  const router = useRouter();

  const [primary, setPrimary] = useState("#f1f1f1");
  const [secondary, setSecondary] = useState("#e7e7e7");
  const [tertiary, setTertiary] = useState("#6A6A6A");
  const [highlight, setHighlight] = useState("#D98C73");
  const [background, setBackground] = useState("#fff");
  const [lightMode, setLightMode] = useState(false);
  const [activePage, setActivePage] = useState("about");

  useEffect(() => {
    if (lightMode === true) {
      setPrimary("#f1f1f1");
      setSecondary("#e7e7e7");
      setTertiary("#6A6A6A");
      setHighlight("#db8f70");
      setBackground("#fff");
    } else {
      setPrimary("#0d0d0d");
      setSecondary("#171717");
      setTertiary("grey");
      setHighlight("#531b96");
      setBackground("black");
    }
  }, [lightMode]);
  return (
    <Box
      id="page-container"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: background,
        minHeight: "100vh",
      }}
    >
      <Box
        id="cards-container"
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: primary,
          padding: "30px",
          borderRadius: "24px",
          margin: "20px",
        }}
      >
        <Box
          id="left"
          sx={{
            width: { xs: "100%", md: "29%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            id="pfp-card"
            sx={{
              backgroundColor: secondary,
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <Box
              id="pfp"
              component="img"
              src="https://avatars.githubusercontent.com/u/7350580?v=4"
              sx={{
                backgroundColor: "grey",
                borderRadius: "14px",
                height: "100%",
                width: "100%",
              }}
            ></Box>
          </Box>
          <br />
          <Box
            id="name-card"
            sx={{
              backgroundColor: secondary,
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              width: "100%",
            }}
          >
            <Typography
              id="name"
              sx={{
                fontSize: "36px",
                fontFamily: "Recoleta Bold",
                color: tertiary,
              }}
            >
              Umer Kazi
            </Typography>
          </Box>
          <br />
          <Box
            id="links-card"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Tooltip title="Resume">
              <IconButton
                target="_blank"
                href="/documents/resume.pdf"
                sx={{
                  target: "_blank",
                  borderRadius: "14px",
                  backgroundColor: secondary,
                  height: "100%",
                  padding: "20px",
                  color: tertiary,
                  "&:hover": { backgroundColor: tertiary, color: secondary },
                }}
              >
                <DescriptionIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/umerkazi/"
                sx={{
                  target: "_blank",
                  borderRadius: "14px",
                  backgroundColor: secondary,
                  height: "100%",
                  color: tertiary,
                  padding: "20px",
                  "&:hover": { backgroundColor: tertiary, color: secondary },
                }}
              >
                <LinkedInIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton
                target="_blank"
                href="https://github.com/UmerKazi"
                sx={{
                  target: "_blank",
                  borderRadius: "14px",
                  backgroundColor: secondary,
                  height: "100%",
                  color: tertiary,
                  padding: "20px",
                  "&:hover": { backgroundColor: tertiary, color: secondary },
                }}
              >
                <GitHubIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email">
              <IconButton
                target="_blank"
                href="mailto:u3kazi@uwaterloo.ca"
                sx={{
                  target: "_blank",
                  borderRadius: "14px",
                  backgroundColor: secondary,
                  height: "100%",
                  color: tertiary,
                  padding: "20px",
                  "&:hover": { backgroundColor: tertiary, color: secondary },
                }}
              >
                <EmailIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Tooltip>
          </Box>
          <br />
          <Box
            id="lmdm-card"
            sx={{
              backgroundColor: secondary,
              borderRadius: "14px",
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              alignSelf: "flex-start",
            }}
          >
            <MaterialUISwitch
              sx={{
                m: 1,
                "& .MuiSwitch-thumb": { backgroundColor: highlight },
              }}
              onChange={() => setLightMode(!lightMode)}
              value={lightMode}
              checked={!lightMode}
            />
          </Box>
        </Box>
        <Box
          id="right"
          sx={{
            borderRadius: "24px",
            width: { xs: "100%", md: "69%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            id="nav"
            sx={{
              width: "100%",
              backgroundColor: secondary,
              borderRadius: "24px",
              padding: "20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography
              onClick={() => setActivePage("about")}
              sx={{
                color: activePage == "about" ? highlight : tertiary,
                fontFamily: "Recoleta Bold",
                fontSize: { xs: "16px", md: "24px" },
                "&:hover": { color: highlight },
                cursor: "pointer",
              }}
            >
              About
            </Typography>
            <Typography
              onClick={() => setActivePage("resume")}
              sx={{
                color: activePage == "resume" ? highlight : tertiary,
                fontFamily: "Recoleta Bold",
                fontSize: { xs: "16px", md: "24px" },
                "&:hover": { color: highlight },
                cursor: "pointer",
              }}
            >
              Resume
            </Typography>
            <Typography
              onClick={() => setActivePage("portfolio")}
              sx={{
                color: activePage == "portfolio" ? highlight : tertiary,
                fontFamily: "Recoleta Bold",
                fontSize: { xs: "16px", md: "24px" },
                "&:hover": { color: highlight },
                cursor: "pointer",
              }}
            >
              Portfolio
            </Typography>
            <Typography
              onClick={() => setActivePage("contact")}
              sx={{
                color: activePage == "contact" ? highlight : tertiary,
                fontFamily: "Recoleta Bold",
                fontSize: { xs: "16px", md: "24px" },
                "&:hover": { color: highlight },
                cursor: "pointer",
              }}
            >
              Contact
            </Typography>
          </Box>
          <br />
          {activePage == "about" && (
            <Box
              id="about"
              sx={{
                width: "100%",
                backgroundColor: secondary,
                borderRadius: "24px",
                padding: { xs: "30px", md: "40px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Recoleta Bold",
                  fontSize: "30px",
                  color: tertiary,
                  alignSelf: "flex-start",
                  marginBottom: "20px",
                }}
              >
                Who Am I?
              </Typography>
              <Divider
                sx={{
                  width: "60px",
                  alignSelf: "flex-start",
                  border: `4px solid ${highlight}`,
                  borderRadius: "100px",
                  marginBottom: "20px",
                }}
              />
              <Typography sx={{ color: tertiary, fontSize: "18px" }}>
                I am a future-focused software developer, forever entangled in
                the chase to make the world around me a better place! I&apos;m
                driven by projects that elevate the lives of mankind in an
                accessible and impactful manner. Currently, I&apos;m a
                fourth-year student at the University of Waterloo, pursuing a
                Bachelor&apos;s in Mathematics, with a Minor in Computer
                Science. Outside of school, you&apos;ll find me in my garage,
                tackling my next automotive project. When I&apos;ve run out of
                steam, I am out and about, capturing the beauty of the world
                through my lens. But most importantly, I focus on raising
                awareness and making a tangible impact on the issues affecting
                our global community.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Recoleta Bold",
                  fontSize: "30px",
                  color: tertiary,
                  alignSelf: "flex-start",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                At the moment...
              </Typography>
              <Divider
                sx={{
                  width: "60px",
                  alignSelf: "flex-start",
                  border: `4px solid ${highlight}`,
                  borderRadius: "100px",
                  marginBottom: "20px",
                }}
              />
              <Box
                id="atm-container"
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  id="atm"
                  sx={{
                    backgroundColor: primary,
                    borderRadius: "24px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    width: { xs: "100%", md: "calc(50% - 5px)" },
                    padding: "20px",
                    marginTop: "10px",
                  }}
                >
                  <Box id="left" sx={{ marginRight: "20px" }}>
                    <SchoolIcon sx={{ color: highlight, fontSize: "48px" }} />
                  </Box>
                  <Box id="right" sx={{}}>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontFamily: "Recoleta Bold",
                        fontSize: "24px",
                      }}
                    >
                      Studying Math @ UWaterloo
                    </Typography>
                    <Typography sx={{ color: tertiary }}>
                      Currently in my 4A Term, majoring in Mathematics and
                      minoring in Computer Science.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  id="atm"
                  sx={{
                    backgroundColor: primary,
                    borderRadius: "24px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    width: { xs: "100%", md: "calc(50% - 5px)" },
                    padding: "20px",
                    marginTop: "10px",
                  }}
                >
                  <Box id="left" sx={{ marginRight: "20px" }}>
                    <BusinessIcon sx={{ color: highlight, fontSize: "48px" }} />
                  </Box>
                  <Box id="right" sx={{}}>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontFamily: "Recoleta Bold",
                        fontSize: "24px",
                      }}
                    >
                      Launching A New Business
                    </Typography>
                    <Typography sx={{ color: tertiary }}>
                      In the process of launching a new business to address the
                      needs of Canadians!
                    </Typography>
                  </Box>
                </Box>
                <Box
                  id="atm"
                  sx={{
                    backgroundColor: primary,
                    borderRadius: "24px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    width: { xs: "100%", md: "calc(50% - 5px)" },
                    padding: "20px",
                    marginTop: "10px",
                  }}
                >
                  <Box id="left" sx={{ marginRight: "20px" }}>
                    <SportsScoreIcon
                      sx={{ color: highlight, fontSize: "48px" }}
                    />
                  </Box>
                  <Box id="right" sx={{}}>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontFamily: "Recoleta Bold",
                        fontSize: "24px",
                      }}
                    >
                      Weekends at the Race Track
                    </Typography>
                    <Typography sx={{ color: tertiary }}>
                      Steadily improving my lap times and burining through more
                      rubber than I can fathom.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  id="atm"
                  sx={{
                    backgroundColor: primary,
                    borderRadius: "24px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    width: { xs: "100%", md: "calc(50% - 5px)" },
                    padding: "20px",
                    marginTop: "10px",
                  }}
                >
                  <Box id="left" sx={{ marginRight: "20px" }}>
                    <CoffeeIcon sx={{ color: highlight, fontSize: "48px" }} />
                  </Box>
                  <Box id="right" sx={{}}>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontFamily: "Recoleta Bold",
                        fontSize: "24px",
                      }}
                    >
                      Pouring Shots Of Espresso
                    </Typography>
                    <Typography sx={{ color: tertiary }}>
                      Trying to get my ratio&apos;s right to get the perfect
                      shot of espresso for my morning coffee.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          {activePage == "resume" && (
            <Box
              id="resume"
              sx={{
                width: "100%",
                backgroundColor: secondary,
                borderRadius: "24px",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Recoleta Bold",
                  fontSize: "30px",
                  color: tertiary,
                  alignSelf: "flex-start",
                  marginBottom: "20px",
                }}
              >
                Experience
              </Typography>
              <Divider
                sx={{
                  width: "60px",
                  alignSelf: "flex-start",
                  border: `4px solid ${highlight}`,
                  borderRadius: "100px",
                  marginBottom: "20px",
                }}
              />
              <Box id="resume_point" sx={{ marginBottom: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src="https://media.licdn.com/dms/image/C560BAQGuubBwCCa9fQ/company-logo_200_200/0/1630668034521/appficiency_inc_logo?e=2147483647&v=beta&t=98wUqM6NDFebBVtTkeQRMSPeYMMnD-ijyugpRXgO_D0"
                    sx={{
                      backgroundColor: "grey",
                      height: "60px",
                      width: "60px",
                      borderRadius: "14px",
                      marginRight: "10px",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontSize: "20px",
                        fontWeight: "600",
                        alignSelf: "flex-start",
                      }}
                    >
                      Software Developer
                    </Typography>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontSize: "18px",
                        alignSelf: "flex-start",
                      }}
                    >
                      Appficiency
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: highlight,
                    fontSize: "18px",
                    alignSelf: "flex-start",
                    fontWeight: "600",
                  }}
                >
                  Jan 2024 - April 2024
                </Typography>
                <ul style={{ fontFamily: "inter" }}>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Spearheaded the development of a comprehensive full-stack
                    solution to enhance document delivery for the sales and
                    marketing team, using <b>Firebase</b>, <b>NextJS</b>,{" "}
                    <b>GCP</b>,<b>TypeScript</b>. Designed to streamline sales
                    and marketing workflows, the tool offers features like
                    document upload/tagging, internal/external sharing via
                    email, and one-time link creation for file sharing,
                    bolstering user engagement with over <b>200</b> active
                    users.
                  </li>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Developed a production field services application for the
                    construction industry, leveraging
                    <b>NextJS</b>, <b>CapacitorJS</b>, <b>Ionic</b>,{" "}
                    <b>Firebase</b>, <b>Node/Express</b>, and the
                    <b>NetSuite REST API</b>. The application offers an
                    intuitive mobile interface to enhance operational
                    efficiency. It features offline functionality, version
                    management, and anti-cheat measures, all while seamlessly
                    integrating with NetSuite via a custom <b>TypeScript</b>{" "}
                    wrapper for data interaction on the client side, a custom{" "}
                    <b>RESTlet</b> for data retrieval on the server side, and a{" "}
                    <b>OAuth 2.0</b> integration for user authentication.
                  </li>
                </ul>
              </Box>
              <Box id="resume_point" sx={{ marginBottom: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src="https://media.licdn.com/dms/image/C4E0BAQHhL6Md62RKJg/company-logo_200_200/0/1603312236621?e=2147483647&v=beta&t=4OVe1R-iOe77lm0ARYBOY7lMbpSsYGCinFThDHadK_U"
                    sx={{
                      backgroundColor: "grey",
                      height: "60px",
                      width: "60px",
                      borderRadius: "14px",
                      marginRight: "10px",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontSize: "20px",
                        fontWeight: "600",
                        alignSelf: "flex-start",
                      }}
                    >
                      Software Developer
                    </Typography>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontSize: "18px",
                        alignSelf: "flex-start",
                      }}
                    >
                      Vyana
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: highlight,
                    fontSize: "18px",
                    alignSelf: "flex-start",
                    fontWeight: "600",
                  }}
                >
                  May 2023 - August 2023
                </Typography>
                <ul style={{ fontFamily: "inter" }}>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Developed and delivered <b>5+</b> software products in
                    various industries ranging from Prop-Tech to Regulatory
                    Compliance, leveraging technologies such as <b>NextJS</b>,{" "}
                    <b>React Native</b>, <b>Typescript</b>, <b>MUI</b>,{" "}
                    <b>DynamoDB</b>, <b>NestJS</b>, <b>Postgres</b>, and{" "}
                    <b>Docker</b> to create end-to-end solutions for clients.
                  </li>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Spearheaded the contract acquisition and development of a
                    custom regulatory compliance tool for an international
                    organization, directly managing and working alongside{" "}
                    <b>3</b> developers to deliver the solution.
                  </li>
                </ul>
              </Box>
              <Box id="resume_point" sx={{ marginBottom: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src="https://www.ept.ca/wp-content/uploads/2021/08/Siemens-logo.jpeg"
                    sx={{
                      backgroundColor: "grey",
                      height: "60px",
                      width: "60px",
                      borderRadius: "14px",
                      marginRight: "10px",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontSize: "20px",
                        fontWeight: "600",
                        alignSelf: "flex-start",
                      }}
                    >
                      Software Developer
                    </Typography>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontSize: "18px",
                        alignSelf: "flex-start",
                      }}
                    >
                      Siemens
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: highlight,
                    fontSize: "18px",
                    alignSelf: "flex-start",
                    fontWeight: "600",
                  }}
                >
                  Sept 2022 - Dec 2022
                </Typography>
                <ul style={{ fontFamily: "inter" }}>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Responsible for the development of the Workplace Connect
                    App, a multi-platform tool that enables a dynamic global
                    office environment. Contributed to the web application,
                    third-party integration&apos;s, and back-end environment,
                    leveraging <b>Vue.js</b>, <b>TypeScript</b>, <b>Vite</b> and{" "}
                    <b>GraphQL</b> to implement <b>15+</b> new features.
                  </li>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Developed a Slack integration for corporate teams,
                    leveraging the <b>Slack API</b> and <b>Bolt JS</b> to
                    interface with a<b>DynamoDB</b> back end through{" "}
                    <b>HTTP requests</b>. Unit tested the integration with{" "}
                    <b>Jest</b> and <b>Cucumber JS</b> with
                    <b> full code coverage</b>.
                  </li>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Created a recommendation model in <b>Python</b> with{" "}
                    <b>surPRISE</b>, leveraging user data from the web
                    application to serve out-of-office event suggestions.
                  </li>
                </ul>
              </Box>
              <Box id="resume_point" sx={{ marginBottom: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src="https://pbs.twimg.com/profile_images/1518763866674585601/OQiasZUI_400x400.jpg"
                    sx={{
                      backgroundColor: "grey",
                      height: "60px",
                      width: "60px",
                      borderRadius: "14px",
                      marginRight: "10px",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontSize: "20px",
                        fontWeight: "600",
                        alignSelf: "flex-start",
                      }}
                    >
                      Junior Web Developer
                    </Typography>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontSize: "18px",
                        alignSelf: "flex-start",
                      }}
                    >
                      Bitbuy (WonderFi)
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: highlight,
                    fontSize: "18px",
                    alignSelf: "flex-start",
                    fontWeight: "600",
                  }}
                >
                  Jan 2022 - Apr 2022
                </Typography>
                <ul style={{ fontFamily: "inter" }}>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Optimized infrastructure, addressed bugs, and developed new
                    features for the web application.
                  </li>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Made over <b>100</b> contributions leveraging{" "}
                    <b>React Gatsby</b>, <b>TypeScript</b> and{" "}
                    <b>Material UI</b> in conjunction with custom design
                    components. Worked with <b>Drupal</b>, <b>Pantheon</b>, and{" "}
                    <b>WordPress</b> for content delivery and the dynamic
                    creation of public-facing web pages. Interfaced with a{" "}
                    <b>Postgres</b> back-end environment, utilizing{" "}
                    <b>AWS Amplify</b> for hosting the application, and{" "}
                    <b>StorybookJS</b> to document and test our custom
                    components.
                  </li>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Assisted in the development of an in-house fraud detection
                    tool, leveraging <b>TensorFlow</b> in <b>Python</b> to
                    detect suspicious transactions through a neural network.
                  </li>
                </ul>
              </Box>
              <Box id="resume_point" sx={{ marginBottom: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src="https://media.licdn.com/dms/image/C4E0BAQE1i0Rf55h5oQ/company-logo_200_200/0/1630630999426/year_zero_studios_logo?e=2147483647&v=beta&t=2vBKWg4elXWJiPpgrUVTiPQ2TGNiRwqFFvg7eT-fcXs"
                    sx={{
                      backgroundColor: "white",
                      height: "60px",
                      width: "60px",
                      borderRadius: "14px",
                      marginRight: "10px",
                      padding: "10px",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontSize: "20px",
                        fontWeight: "600",
                        alignSelf: "flex-start",
                      }}
                    >
                      Software Developer
                    </Typography>
                    <Typography
                      sx={{
                        color: tertiary,
                        fontSize: "18px",
                        alignSelf: "flex-start",
                      }}
                    >
                      Year Zero Studios
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: highlight,
                    fontSize: "18px",
                    alignSelf: "flex-start",
                    fontWeight: "600",
                  }}
                >
                  May 2021 - Aug 2021
                </Typography>
                <ul style={{ fontFamily: "inter" }}>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Team lead for the Mental Health Score project, responsible
                    for the development, management, branding, and marketing of
                    this project.
                  </li>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Independently created the full-stack web application from
                    scratch, leveraging <b>TypeScript</b>, <b>React</b>, and{" "}
                    <b>Firebase</b>. The front end was designed using{" "}
                    <b>Material-UI</b>, and the project was hosted on{" "}
                    <b>Vercel</b>.
                  </li>
                  <li style={{ color: tertiary, fontSize: "18px" }}>
                    Re-branded the project in order to target a new market of
                    customers and successfully launched a strategic campaign,
                    resulting in a <b>300%</b> increase in the user base.
                  </li>
                </ul>
              </Box>
            </Box>
          )}
          {activePage == "portfolio" && (
            <Box
              id="resume"
              sx={{
                width: "100%",
                backgroundColor: secondary,
                borderRadius: "24px",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Recoleta Bold",
                  fontSize: "30px",
                  color: tertiary,
                  alignSelf: "flex-start",
                  marginBottom: "20px",
                }}
              >
                Projects
              </Typography>
              <Divider
                sx={{
                  width: "60px",
                  alignSelf: "flex-start",
                  border: `4px solid ${highlight}`,
                  borderRadius: "100px",
                  marginBottom: "20px",
                }}
              />
              <Box
                id="projects-container"
                sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
              >
                {projects.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    passHref
                  >
                    <Box
                      sx={{
                        position: "relative",
                        fontFamily: "inter",
                        borderRadius: "14px",
                        height: "220px",
                        width: "220px",
                        margin: "5px",
                        cursor: "pointer",
                        textAlign: "center",
                        overflow: "hidden", // Add this to hide the text overflow
                        "&:hover": {
                          opacity: "0.8",
                          transition: "0.3s ease",
                          backgroundColor: "black",
                          "&::after": {
                            content: `"${item.name}"`,
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            background: "rgba(0, 0, 0, 0.7)",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            opacity: 1,
                            pointerEvents: "none",
                            zIndex: 1,
                            transition: "opacity 0.2s ease",
                          },
                          target: "_blank",
                        },
                      }}
                    >
                      <Image
                        src={lightMode === false ? item.darkImage : item.image}
                        alt={item.name}
                        height={220}
                        width={220}
                        style={{ borderRadius: "14px" }}
                      />
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          )}
          {activePage == "contact" && (
            <Box
              id="resume"
              sx={{
                width: "100%",
                backgroundColor: secondary,
                borderRadius: "24px",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Recoleta Bold",
                  fontSize: "30px",
                  color: tertiary,
                  alignSelf: "flex-start",
                  marginBottom: "20px",
                }}
              >
                Get In Touch
              </Typography>
              <Divider
                sx={{
                  width: "60px",
                  alignSelf: "flex-start",
                  border: `4px solid ${highlight}`,
                  borderRadius: "100px",
                  marginBottom: "20px",
                }}
              />
              <Typography sx={{ color: tertiary, fontSize: "18px" }}>
                Thanks for checking out my site! If you have any questions,
                would like to work together, or simply want to chat, feel free
                to send me an email at:
              </Typography>
              <Typography
                sx={{
                  color: tertiary,
                  fontSize: "18px",
                  fontWeight: "600",
                  marginTop: "10px",
                  marginBottom: "10px",
                  backgroundColor: primary,
                  padding: "20px",
                  borderRadius: "14px",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                }}
              >
                u3kazi@uwaterloo.ca
              </Typography>
              <Typography sx={{ color: tertiary, fontSize: "18px" }}>
                Alternatively, you can send me a message on LinkedIn and
                I&apos;ll be sure to get back to you ASAP!
              </Typography>
              <br />
              <br />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
