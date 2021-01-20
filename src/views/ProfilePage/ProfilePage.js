import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Polymer from "@material-ui/icons/Polymer";
import Code from "@material-ui/icons/Code";
import Description from "@material-ui/icons/Description";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import profile from "assets/img/faces/theodore.png";
import background from "assets/img/techbackground4.gif";
import PusheenGame2 from "../../assets/img/projects/PusheenGame2.png";
import FirstYear from "../../assets/img/projects/firstyear1.png";
import Pokebuilds from "../../assets/img/projects/pokebuilds1.png";
//import AllPagesPDFViewer from "components/Pdf/all-pages.js";
import Resume from "../../assets/pdfs/Resume.pdf";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { card, cardTitle } from "assets/jss/material-kit-react.js";

const cardStyles = {
  ...imagesStyles,
  cardTitle,
  card,
};

const useStyles = makeStyles(styles);
const useCardStyles = makeStyles(cardStyles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const cardClasses = useCardStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={background} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h1 className={classes.title}>Theodore Pochart</h1>
                    <h2>Full Stack Engineer</h2>
                    <Button justIcon link className={classes.margin5}>
                      <a href="https://www.linkedin.com/in/theodore-pochart/">
                        <i className={"fab fa-linkedin"} />
                      </a>
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <a href="https://github.com/TeddySpaghet">
                        <i className={"fab fa-github"} />
                      </a>
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <address>
                        <a href="mailto:theodore.pochart@gmail.com">
                          <i className={"fab fa-google"} />
                        </a>
                      </address>
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <h4>
                Full stack web developer experienced in JavaScript, Express and
                Node with a passion for solving complex problems. I bring
                adaptability, focus and a positive mindset to any project I take
                part in, and strive to take on leadership roles whenever the
                opportunity arises.{" "}
              </h4>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Skillset",
                      tabIcon: Polymer,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <i
                              className={
                                "devicon devicon-javascript-plain colored"
                              }
                            />
                            <h3>JavaScript</h3>
                            <i
                              className={
                                "devicon devicon-html5-plain-wordmark colored"
                              }
                            />
                            <h3>html5</h3>
                            <i
                              className={
                                "devicon devicon-css3-plain-wordmark colored"
                              }
                            />
                            <h3>css3</h3>
                            <i
                              className={"devicon devicon-python-plain colored"}
                            />
                            <h3>Python</h3>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <i
                              className={
                                "devicon devicon-express-original colored"
                              }
                            />
                            <h3>Express</h3>
                            <i
                              className={"devicon devicon-nodejs-plain colored"}
                            />
                            <h3>Node</h3>
                            <i
                              className={
                                "devicon devicon-react-original colored"
                              }
                            />
                            <h3>React</h3>
                            <i
                              className={
                                "devicon devicon-sass-original colored"
                              }
                            />
                            <h3>Scss</h3>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <i
                              className={
                                "devicon devicon-postgresql-plain-wordmark colored"
                              }
                            />
                            <h3>PostgreSQL</h3>
                            <i
                              className={
                                "devicon devicon-sequelize-plain colored"
                              }
                            />
                            <h3>Sequelize</h3>
                            <i
                              className={"devicon devicon-mysql-plain colored"}
                            />
                            <h3>MySQL</h3>
                            <i className={"devicon devicon-angularjs-plain"} />
                            <h3>Microsoft Azure</h3>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Code,
                      tabContent: (
                        <GridContainer justify="center">
                          <Card
                            style={{ width: "20rem" }}
                            className={cardClasses.card}
                          >
                            <img
                              style={{
                                height: "180px",
                                width: "100%",
                                display: "block",
                              }}
                              className={cardClasses.imgCardTop}
                              src={PusheenGame2}
                              alt="Card-img-cap"
                            />
                            <CardBody>
                              <h4 className={cardClasses.cardTitle}>
                                Pusheen Power Clash!
                              </h4>
                              <p>
                                Browser based game with full gameplay loop and
                                replayability. Play as one of four unique
                                Pusheens!
                              </p>
                              <Button justIcon link className={classes.margin5}>
                                <a href="https://github.com/TeddySpaghet/CombatSim">
                                  <i className={"fab fa-github"} />
                                </a>
                              </Button>
                            </CardBody>
                          </Card>
                          <Card
                            style={{ width: "20rem" }}
                            className={cardClasses.card}
                          >
                            <img
                              style={{
                                height: "180px",
                                width: "100%",
                                display: "block",
                              }}
                              className={cardClasses.imgCardTop}
                              src={FirstYear}
                              alt="Card-img-cap"
                            />
                            <CardBody>
                              <h4 className={cardClasses.cardTitle}>
                                First Steps
                              </h4>
                              <p>
                                FullStack CRUD personal memoir app, deployed on
                                Microsoft Azure. Create the perfect online baby
                                book!
                              </p>
                              <Button justIcon link className={classes.margin5}>
                                <a href="https://github.com/TeddySpaghet/Project-two-BabyBook">
                                  <i className={"fab fa-github"} />
                                </a>
                              </Button>
                            </CardBody>
                          </Card>
                          <Card
                            style={{ width: "20rem" }}
                            className={cardClasses.card}
                          >
                            <img
                              style={{
                                height: "180px",
                                width: "100%",
                                display: "block",
                              }}
                              className={cardClasses.imgCardTop}
                              src={Pokebuilds}
                              alt="Card-img-cap"
                            />
                            <CardBody>
                              <h4 className={cardClasses.cardTitle}>
                                PokeBuilds
                              </h4>
                              <p>
                                Build, edit, and save your dream Pokemon team in
                                this PERN-Stack app powered by PokeAPI!
                              </p>
                              <Button justIcon link className={classes.margin5}>
                                <a href="https://github.com/TeddySpaghet/PokeBuilds/blob/nilecontext/README.MD">
                                  <i className={"fab fa-github"} />
                                </a>
                              </Button>
                            </CardBody>
                          </Card>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Resume",
                      tabIcon: Description,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <div className="Resume-container">
                              <a href={Resume}>Click here for my pdf</a>
                            </div>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
