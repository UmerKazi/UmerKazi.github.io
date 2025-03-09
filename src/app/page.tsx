"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import { m, motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Photos
import costaRica1 from "../../public/photos/costa_rica_1.jpg";
import costaRica2 from "../../public/photos/costa_rica_2.jpg";
import iceland1 from "../../public/photos/iceland_1.jpg";
import london1 from "../../public/photos/london_1.jpg";
import morocco1 from "../../public/photos/morocco_1.jpg";
import morocco2 from "../../public/photos/morocco_2.jpg";
import morocco4 from "../../public/photos/morocco_4.jpg";
import portugal1 from "../../public/photos/portugal_1.jpg";
import portugal2 from "../../public/photos/portugal_2.jpg";
import saskatoon1 from "../../public/photos/saskatoon_1.jpg";
import saskatoon2 from "../../public/photos/saskatoon_2.jpg";
import saskatoon3 from "../../public/photos/saskatoon_3.jpg";
import southAfrica1 from "../../public/photos/south_africa_1.jpg";
import southAfrica2 from "../../public/photos/south_africa_2.jpg";
import thunderBay1 from "../../public/photos/thunder_bay_1.jpg";
import { useEffect, useState } from "react";

const photos = [
  {
    id: 1,
    src: costaRica1,
    alt: "Costa Rica",
    title: "Costa Rica",
    description: "Monteverde Cloud Forest",
  },
  {
    id: 5,
    src: morocco1,
    alt: "Morocco",
    title: "Morocco",
    description: "Sahara Desert",
  },
  {
    id: 9,
    src: portugal1,
    alt: "Portugal",
    title: "Portugal",
    description: "Lisbon",
  },
  {
    id: 3,
    src: iceland1,
    alt: "Iceland",
    title: "Iceland",
    description: "Kirkjubæjarklaustur",
  },
  {
    id: 4,
    src: london1,
    alt: "London",
    title: "United Kingdom",
    description: "London",
  },

  {
    id: 6,
    src: morocco2,
    alt: "Morocco",
    title: "Morocco",
    description: "Marrakesh",
  },
  {
    id: 8,
    src: morocco4,
    alt: "Morocco",
    title: "Morocco",
    description: "Marrakesh",
  },

  {
    id: 10,
    src: portugal2,
    alt: "Portugal",
    title: "Portugal",
    description: "Sintra",
  },

  {
    id: 11,
    src: saskatoon1,
    alt: "Saskatoon",
    title: "Canada",
    description: "Saskatoon",
  },
  {
    id: 16,
    src: thunderBay1,
    alt: "Thunder Bay",
    title: "Canada",
    description: "Thunder Bay",
  },
  {
    id: 12,
    src: saskatoon2,
    alt: "Saskatoon",
    title: "Canada",
    description: "Saskatoon",
  },
  {
    id: 13,
    src: saskatoon3,
    alt: "Saskatoon",
    title: "Canada",
    description: "Saskatoon",
  },
  {
    id: 14,
    src: southAfrica1,
    alt: "South Africa",
    title: "South Africa",
    description: "Kruger National Park",
  },
  {
    id: 15,
    src: southAfrica2,
    alt: "South Africa",
    title: "South Africa",
    description: "Kruger National Park",
  },
];

const MasonryGrid = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    // Reset counter when photos array changes
    setImagesLoaded(0);
  }, [photos.length]);

  // This function will be called each time an image loads
  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  // Only apply masonry calculations after all images are loaded
  useEffect(() => {
    if (imagesLoaded === photos.length) {
      calculateLayout();
    }
  }, [imagesLoaded]);

  const calculateLayout = () => {
    const grid = document.querySelector(".masonry-grid");
    if (!grid) return;

    const rowHeight = 1; // Our grid-auto-rows value
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap") || "16",
    );

    const items = document.querySelectorAll(".masonry-item");
    items.forEach((item) => {
      const content = item.querySelector(".masonry-content");
      if (!content) return;

      const height = content.getBoundingClientRect().height;
      const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
      (item as HTMLElement).style.gridRowEnd = `span ${rowSpan}`;
    });
  };

  // Add window resize listener
  useEffect(() => {
    window.addEventListener("resize", calculateLayout);
    return () => {
      window.removeEventListener("resize", calculateLayout);
    };
  }, []);

  return (
    <div
      className="masonry-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "0.5rem",
        width: "100%",
        gridAutoRows: "1px",
      }}
    >
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="masonry-item"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "0.5rem",
          }}
          onMouseEnter={() => setHoveredId(photo.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div
            className="masonry-content"
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingBottom: `${
                  (1 / (photo.src.width / photo.src.height || 4 / 3)) * 100
                }%`,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={photo.id <= 6}
                onLoad={handleImageLoad}
              />
            </div>

            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: `rgba(0, 0, 0, ${
                  hoveredId === photo.id ? "0.6" : "0"
                })`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                transition: "background-color 0.3s ease",
                borderRadius: "0.5rem",
              }}
            >
              <div
                style={{
                  padding: "1rem",
                  transform: `translateY(${
                    hoveredId === photo.id ? "0" : "100%"
                  })`,
                  transition: "transform 0.3s ease",
                }}
              >
                <h3
                  style={{
                    color: "white",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    margin: 0,
                  }}
                >
                  {photo.title}
                </h3>
                <p
                  style={{
                    color: "#B6B9BD",
                    fontSize: "0.875rem",
                    marginTop: "0.25rem",
                  }}
                >
                  {photo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
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
              development lead @ askcipher • founder @ folio
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
                href="https://foliotech.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography className={styles.buttonText}>
                  folio inc.
                </Typography>
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
            impactful manner. Currently, i&apos;m leading the software
            development of b2c ai tooling at{" "}
            <span
              className={styles.link}
              onClick={() => {
                window.open("https://www.askcipher.com/", "_blank");
              }}
            >
              askcipher
            </span>{" "}
            . i&apos;m also scaling my business{" "}
            <span
              className={styles.link}
              onClick={() => {
                window.open("https://www.appficiency.com/", "_blank");
              }}
            >
              folio
            </span>{" "}
            to new heights. Outside of school, you&apos;ll find me in my garage,
            tackling my next automotive project. When I&apos;ve run out of
            steam, I am out and about, capturing the beauty of the world. But
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
                  src="cipher-dark.jpg"
                  style={{ border: "1px solid rgb(38, 38, 38)" }}
                ></Box>
                <Box className={styles.textContainer}>
                  <Typography className={styles.role}>
                    Development Lead
                  </Typography>
                  <Typography
                    className={styles.company}
                    onClick={() => {
                      window.open("https://www.askcipher.com/", "_blank");
                    }}
                  >
                    AskCipher
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.right}>
                <Typography className={styles.date}>Present</Typography>
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
                <Typography className={styles.date}>
                  May 2024 - August 2024
                </Typography>
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
                <Typography className={styles.date}>
                  January 2024 - April 2024
                </Typography>
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
                <Typography className={styles.date}>
                  May 2023 - August 2023
                </Typography>
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
                        "_blank",
                      );
                    }}
                  >
                    Siemens
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.right}>
                <Typography className={styles.date}>
                  September 2022 - December 2022
                </Typography>
              </Box>
            </Box>
            <Box className={styles.experience}>
              <Box className={styles.left2}>
                <Box
                  className={styles.logo}
                  component="img"
                  src="https://play-lh.googleusercontent.com/REsKllzeBPCKZ4rnYEsERKC-Z9FupJL-VKd-bQkoXRwmoGTYXinBZF2R64SbrQp9aoU"
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
                <Typography className={styles.date}>
                  January 2022 - April 2022
                </Typography>
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
                        "_blank",
                      );
                    }}
                  >
                    Year Zero Studios
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.right}>
                <Typography className={styles.date}>
                  May 2021 - August 2021
                </Typography>
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
          <Typography className={styles.title}>photos</Typography>
          <Typography className={styles.subtitle}>
            some of my favourite moments
          </Typography>
          <MasonryGrid />
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
              <a href="mailto:umer@kazi.cc">
                <span className={styles.link}>umer@kazi.cc</span>
              </a>{" "}
              or connect with me on{" "}
              <span
                className={styles.link}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/umerkazi/",
                    "_blank",
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
