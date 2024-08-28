"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Tooltip, Typography } from "@mui/material";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileText,
} from "@tabler/icons-react";
import CustomTooltip from "./CustomTooltip";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Box className={styles.main}>
      <Box className={styles.card} maxWidth="md">
        <Box
          className={styles.row}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 30,
            }}
          >
            <Typography className={styles.title}>umer kazi</Typography>
            <Typography className={styles.subtitle}>
              swe @ wayfair • mathematics @ uwaterloo
            </Typography>
          </motion.div>
          <motion.div // Wrap this Box in a motion.div to animate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.right}
            transition={{
              delay: 1.2,
            }}
          >
            <motion.div // Wrap this Box in a motion.div to animate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.2,
              }}
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Typography className={styles.buttonText}>resume</Typography>
              </a>
            </motion.div>
            <motion.div // Wrap this Box in a motion.div to animate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.35,
              }}
            >
              <a
                href="https://www.linkedin.com/in/umerkazi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography className={styles.buttonText}>linkedin</Typography>
              </a>
            </motion.div>
            <motion.div // Wrap this Box in a motion.div to animate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.45,
              }}
            >
              <a
                href="https://github.com/UmerKazi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography className={styles.buttonText}>github</Typography>
              </a>
            </motion.div>
            <motion.div // Wrap this Box in a motion.div to animate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.55,
              }}
            >
              <a
                href="https://consulting.kazi.cc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography className={styles.buttonText}>consulting</Typography>
              </a>
            </motion.div>
          </motion.div>
        </Box>
        <Box
          className={styles.row3}
          sx={{
            display: { xs: "flex", sm: "none" },
            width: "300px",
            flexWrap: "wrap",
          }}
        >
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 30,
            }}
          >
            <Typography className={styles.title}>umer kazi</Typography>
          </motion.div>
          <motion.div // Wrap this Box in a motion.div to animate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.right2}
            transition={{
              delay: 1.2,
            }}
          >
            <motion.div // Wrap this Box in a motion.div to animate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.2,
              }}
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Typography className={styles.buttonText}>resume</Typography>
              </a>
            </motion.div>
            <motion.div // Wrap this Box in a motion.div to animate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.35,
              }}
            >
              <a
                href="https://www.linkedin.com/in/umerkazi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography className={styles.buttonText}>linkedin</Typography>
              </a>
            </motion.div>
            <motion.div // Wrap this Box in a motion.div to animate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.45,
              }}
            >
              <a
                href="https://github.com/UmerKazi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography className={styles.buttonText}>github</Typography>
              </a>
            </motion.div>
          </motion.div>
        </Box>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 30,
          }}
        >
          <Box
            sx={{ display: { xs: "flex", sm: "none" } }}
            className={styles.subtitle2}
          >
            swe @ wayfair • mathematics @ uwaterloo
          </Box>
        </motion.div>

        <motion.div // Wrap this Box in a motion.div to animate
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 30,
            delay: 0.4,
          }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "row",
            marginTop: "-5px",
          }}
        >
          <Box
            component="img"
            src="./me.jpeg"
            className={styles.picture}
            sx={{ display: { xs: "none", sm: "fixed" } }}
          />
          <Typography className={styles.body}>
            <Box
              component="img"
              src="./me.jpeg"
              className={styles.picture2}
              sx={{ display: { xs: "fixed", sm: "none" } }}
            />
            I am a future-focused software developer, forever entangled in the
            chase to make the world around me a better place! I&apos;m driven by
            projects that elevate the lives of mankind in an accessible and
            impactful manner. Currently, I&apos;m interning at{" "}
            <span
              className={styles.link}
              onClick={() => {
                window.open("https://www.appficiency.com/", "_blank");
              }}
            >
              appficiency
            </span>{" "}
            as a Software Developer.
            I&apos;m also a fourth-year student at the{" "}
            <span
              className={styles.link}
              onClick={() => {
                window.open("https://uwaterloo.ca/", "_blank");
              }}
            >
              University of Waterloo
            </span>
            , pursuing a Bachelor&apos;s in Mathematics, with a Minor in
            Computer Science. Outside of school, you&apos;ll find me in my
            garage, tackling my next automotive project. When I&apos;ve run out
            of steam, I am out and about, capturing the beauty of the world. But
            most importantly, I focus on raising awareness and making a tangible
            impact on the issues affecting our global community
          </Typography>
        </motion.div>
      </Box>
      <Box className={styles.card} maxWidth="md">
        <motion.div // Wrap this Box in a motion.div to animate
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          className={styles.row2}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 30,
            delay: 1.4,
          }}
        >
          <Typography className={styles.title}>experience</Typography>
          <Typography className={styles.subtitle}>
            some of the companies i&apos;ve worked with
          </Typography>
          <Box className={styles.experienceContainer}>
            <Box className={styles.experience}>
              <Box className={styles.left2}>
                <Box
                  className={styles.logo}
                  component="img"
                  src="https://media.licdn.com/dms/image/C560BAQGuubBwCCa9fQ/company-logo_200_200/0/1630668034521/appficiency_inc_logo?e=2147483647&v=beta&t=98wUqM6NDFebBVtTkeQRMSPeYMMnD-ijyugpRXgO_D0"
                ></Box>
                <Box className={styles.textContainer}>
                  <Typography className={styles.role}>
                    Software Developer
                  </Typography>
                  <Typography
                    className={styles.company}
                    onClick={() => {
                      window.open("https://www.appficiency.com/", "_blank");
                    }}
                  >
                    Appficiency
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.right}>
                <Typography className={styles.date}>Fall 2024</Typography>
              </Box>
            </Box>
            <Box className={styles.experience}>
              <Box className={styles.left2}>
                <Box
                  className={styles.logo}
                  component="img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4UK4w4ZnnMX0AujHQoTIfm2jvcc8NIq-vtXkmlvazg&s"
                ></Box>
                <Box className={styles.textContainer}>
                  <Typography className={styles.role}>
                    Software Engineer
                  </Typography>
                  <Typography
                    className={styles.company}
                    onClick={() => {
                      window.open("https://www.wayfair.ca/", "_blank");
                    }}
                  >
                    Wayfair
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.right}>
                <Typography className={styles.date}>Summer 2024</Typography>
              </Box>
            </Box>
            <Box className={styles.experience}>
              <Box className={styles.left2}>
                <Box
                  className={styles.logo}
                  component="img"
                  src="https://media.licdn.com/dms/image/C560BAQGuubBwCCa9fQ/company-logo_200_200/0/1630668034521/appficiency_inc_logo?e=2147483647&v=beta&t=98wUqM6NDFebBVtTkeQRMSPeYMMnD-ijyugpRXgO_D0"
                ></Box>
                <Box className={styles.textContainer}>
                  <Typography className={styles.role}>
                    Software Developer
                  </Typography>
                  <Typography
                    className={styles.company}
                    onClick={() => {
                      window.open("https://www.appficiency.com/", "_blank");
                    }}
                  >
                    Appficiency
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.right}>
                <Typography className={styles.date}>Winter 2024</Typography>
              </Box>
            </Box>
            <Box className={styles.experience}>
              <Box className={styles.left2}>
                <Box
                  className={styles.logo}
                  component="img"
                  src="https://media.licdn.com/dms/image/C4E0BAQHhL6Md62RKJg/company-logo_200_200/0/1630639214740/vyanaio_logo?e=2147483647&v=beta&t=sqGJH0Nvrl6mPzMGzIXBDJRlXKvW83WQRHSVDrwpT9c"
                ></Box>
                <Box className={styles.textContainer}>
                  <Typography className={styles.role}>
                    Software Developer
                  </Typography>
                  <Typography
                    className={styles.company}
                    onClick={() => {
                      window.open("https://www.vyana.io/", "_blank");
                    }}
                  >
                    Vyana
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.right}>
                <Typography className={styles.date}>Summer 2023</Typography>
              </Box>
            </Box>
            <Box className={styles.experience}>
              <Box className={styles.left2}>
                <Box
                  className={styles.logo}
                  component="img"
                  src="https://www.ept.ca/wp-content/uploads/2021/08/Siemens-logo.jpeg"
                ></Box>
                <Box className={styles.textContainer}>
                  <Typography className={styles.role}>
                    Software Developer
                  </Typography>
                  <Typography
                    className={styles.company}
                    onClick={() => {
                      window.open(
                        "https://www.siemens.com/global/en.html",
                        "_blank"
                      );
                    }}
                  >
                    Siemens
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.right}>
                <Typography className={styles.date}>Fall 2022</Typography>
              </Box>
            </Box>
            <Box className={styles.experience}>
              <Box className={styles.left2}>
                <Box
                  className={styles.logo}
                  component="img"
                  src="https://pbs.twimg.com/profile_images/1518763866674585601/OQiasZUI_400x400.jpg"
                ></Box>
                <Box className={styles.textContainer}>
                  <Typography className={styles.role}>
                    Junior Web Developer
                  </Typography>
                  <Typography
                    className={styles.company}
                    onClick={() => {
                      window.open("https://bitbuy.ca/", "_blank");
                    }}
                  >
                    Bitbuy (WonderFi)
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.right}>
                <Typography className={styles.date}>Winter 2022</Typography>
              </Box>
            </Box>
            <Box className={styles.experience}>
              <Box className={styles.left2}>
                <Box
                  className={styles.logo}
                  component="img"
                  src="/yearzero.png"
                ></Box>
                <Box className={styles.textContainer}>
                  <Typography className={styles.role}>
                    Software Developer
                  </Typography>
                  <Typography
                    className={styles.company}
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/company/year-zero-studios/",
                        "_blank"
                      );
                    }}
                  >
                    Year Zero Studios
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.right}>
                <Typography className={styles.date}>Summer 2021</Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
      <Box className={styles.card} maxWidth="md">
        <motion.div // Wrap this Box in a motion.div to animate
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          className={styles.row2}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 30,
            delay: 1.4,
          }}
        >
          <Typography className={styles.title}>projects</Typography>
          <Typography className={styles.subtitle}>
            some of the things i&apos;ve made
          </Typography>
          <Box className={styles.projectsContainer}>
            <CustomTooltip title="RentGo">
              <Box
                className={styles.projectCard}
                component="img"
                src="./rg-dark.jpg"
                onClick={() => {
                  window.open("https://www.rent-go.ca/", "_blank");
                }}
              />
            </CustomTooltip>
            <CustomTooltip title="Aegis Mapping">
              <Box
                className={styles.projectCard}
                component="img"
                src="./am-dark.jpg"
                onClick={() => {
                  window.open("https://www.aegismapping.ca/", "_blank");
                }}
              />
            </CustomTooltip>
            <CustomTooltip title="Typhon">
              <Box
                className={styles.projectCard}
                component="img"
                src="./typhon-dark.png"
                onClick={() => {
                  window.open("https://www.typhon.pro/", "_blank");
                }}
              />
            </CustomTooltip>
            <CustomTooltip title="Kazi Consulting">
              <Box
                className={styles.projectCard}
                component="img"
                src="./kc-dark.jpg"
                onClick={() => {
                  window.open("https://www.kazi.consulting/", "_blank");
                }}
              />
            </CustomTooltip>
            <CustomTooltip title="Qabu">
              <Box
                className={styles.projectCard}
                component="img"
                src="./qa-dark.jpg"
                onClick={() => {
                  window.open("https://www.vaultedvintage.ca/", "_blank");
                }}
              />
            </CustomTooltip>
            <CustomTooltip title="Vaulted Vintage">
              <Box
                className={styles.projectCard}
                component="img"
                src="./vv-dark.jpg"
                onClick={() => {
                  window.open("https://www.vaultedvintage.ca/", "_blank");
                }}
              />
            </CustomTooltip>
          </Box>
        </motion.div>
      </Box>
      <Box
        className={styles.card}
        maxWidth="md"
        style={{ marginBottom: "80px" }}
      >
        <motion.div // Wrap this Box in a motion.div to animate
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          className={styles.row2}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 30,
            delay: 1.4,
          }}
        >
          <Typography className={styles.title}>contact</Typography>
          <Typography className={styles.subtitle}>
            let&apos;s get in touch!
          </Typography>
          <Box className={styles.contactContainer}>
            <Typography className={styles.body}>
              Thanks for stopping by! If you&apos;d like to get in touch, feel
              free to send me an email at{" "}
              <a href="mailto:u3kazi@uwaterloo.ca">
                <span className={styles.link}>u3kazi@uwaterloo.ca</span>
              </a>{" "}
              or connect with me on{" "}
              <span
                className={styles.link}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/umerkazi/",
                    "_blank"
                  );
                }}
              >
                LinkedIn
              </span>
              . I&apos;m always open to new opportunities and collaborations, so
              please don&apos;t hesitate to reach out!
            </Typography>
          </Box>
        </motion.div>
      </Box>
      <Typography className={styles.footer}>
        made in waterloo with ❤️
      </Typography>
    </Box>
  );
}
