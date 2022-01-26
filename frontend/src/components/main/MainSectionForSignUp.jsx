import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom"
import Zoom from "@material-ui/core/Zoom";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
function MainSectionForSignUp() {
  const [checked, setChecked] = React.useState(false);
  const [checkedForBack, setCheckedForBack] = React.useState(true);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  const useTransitionStyles = makeStyles((theme) => ({
    root: {
      height: 180,
    },
    container: {
      display: "flex",
    },
    paper: {
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));
  const classesAnimated = useTransitionStyles();
  function getSteps() {
    return ["Select campaign settings", "Create an ad group"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return [
          <>
            <Slide
              direction="up"
              in={checkedForBack}
              mountOnEnter
              unmountOnExit
            >
              <form className="form_custom_class" method="post" name="form">
                <div class="sign__group">
                  <input type="text" class="sign__input" placeholder="Name" />
                </div>

                <div class="sign__group">
                  <input type="email" class="sign__input" placeholder="Email" />
                </div>

                <div class="sign__group">
                  <input
                    type="password"
                    class="sign__input"
                    placeholder="Password"
                  />
                </div>

                <div class="sign__group sign__group--checkbox">
                  <input id="remember3" name="remember" type="checkbox" />
                  <label for="remember3">
                    I agree to the <a href="privacy.html">Privacy Policy</a>
                  </label>
                </div>

                <button class="sign__btn" type="button">
                  Sign up
                </button>

                <span class="sign__delimiter">or</span>
                <span class="sign__text">
                  Already have an account? <Link to="/signin">Sign in!</Link>
                </span>
              </form>
            </Slide>
          </>,
        ];
      case 1:
        return [
          <>
            <Zoom in={checked} mountOnEnter unmountOnExit>
              <form className="form_custom_class" method="post" name="form">
                <div class="sign__group">
                  <input type="text" class="sign__input" placeholder="Name" />
                </div>

                <div class="sign__group">
                  <input type="text" class="sign__input" placeholder="Email" />
                </div>

                <div class="sign__group">
                  <input
                    type="password"
                    class="sign__input"
                    placeholder="Password"
                  />
                </div>

                <div class="sign__group sign__group--checkbox">
                  <input id="remember3" name="remember" type="checkbox" />
                  <label for="remember3">
                    I agree to the <a href="privacy.html">Privacy Policy</a>
                  </label>
                </div>

                <button class="sign__btn" type="button">
                  Sign up
                </button>

                <span class="sign__delimiter">or</span>
                <span class="sign__text">
                  Already have an account? <a href="signin.html">Sign in!</a>
                </span>
              </form>
            </Zoom>
          </>,
        ];

      default:
        return "Unknown step";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    setChecked(true);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setCheckedForBack(false);
  };

  const handleBack = () => {
    setChecked(false);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCheckedForBack(true);
  };

  // signin-active a
  return (
    <>
      <main class="main">
        <div class="container-fluid">
          <div class="row row--grid">
            <div class="col-12">
              <ul class="breadcrumb">
                <li class="breadcrumb__item">
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb__item breadcrumb__item--active">
                  Sign up
                </li>
              </ul>
            </div>

            <div class="col-12">
              <div class="sign">
                <div class="frame sign">
                  <center>
                    <br />

                    <a href="index.html">
                      <img src="img/logo.png" alt="" />
                    </a>
                    <br />
                    <br />
                  </center>
                  <div class="nav">
                    <ul class="links">
                      <li
                        class={
                          activeStep === 0 ? "signin-active" : "signup-inactive"
                        }
                      >
                        <a class="btn" onClick={handleBack}>
                          Register as User
                        </a>
                      </li>
                      <li
                        class={
                          activeStep === 1 ? "signin-active" : "signup-inactive"
                        }
                      >
                        <a class="btn" onClick={handleNext}>
                          Register as Artist
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div ng-app>
                    <div className={classes.root}>
                      <div>
                        <div>
                          <Typography className={classes.instructions}>
                            {getStepContent(activeStep)}
                          </Typography>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainSectionForSignUp;
