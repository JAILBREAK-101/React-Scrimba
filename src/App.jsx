import Learn from "./Learn";
// import { bgImage } from "../static-job-listings-master/images/bg-header-desktop.svg";
import { Api } from "./data";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    // WHEN YOU TRY NEW THINGS, YOU BECOME BETTER - ALWAYS KEEP GROWING

    // FOR PROPS - But if you pass size={null} or size={0}, the default value will not be used.

    <div className="wrapper">
      {/* // eslint-disable-next-line react/jsx-no-undef */}
      <Learn prop={Api}>
        {/* <BackgroundImage /> */}
        {/* <img src={bgImage} alt="Background Image" /> */}
        {/* practice on react.js props and state*/}
        {/* A placeholder for children jsx elements to be nested inside this react component */}
        {Api.map((eachJob) => {
          return (
            <div className="job" key={eachJob.id}>
              <div className="job__component">
                <div className="job__left-details">
                  <img
                    className="job__logo"
                    src={eachJob.logo}
                    alt={eachJob.company}
                  />
                  <p className="job__categories">
                    <p className="job__adds">
                      <span className="job__adds job__adds--name">
                        {eachJob.company}
                      </span>
                      {eachJob.new ? (
                        <span className="job__adds job__adds--new">NEW! </span>
                      ) : null}
                      {eachJob.featured && (
                        <span className="job__adds job__adds--features">
                          FEATURED
                        </span>
                      )}
                    </p>
                    <span className="job__position">{eachJob.position}</span>
                    <span className="job__specs">
                      <span>{eachJob.timePosted}</span>{" "}
                      <span className="dot">⚫</span>
                      <span>{eachJob.contract}</span>{" "}
                      <span className="dot">⚫</span>
                      <span>{eachJob.location}</span>
                    </span>
                  </p>
                </div>
                <div className="job__right-details">
                  <p className="job__role">{eachJob.role}</p>
                  <p className="job__level">{eachJob.level}</p>
                  <p className="job__languages">
                    {eachJob.progLanguage.map((language) => (
                      <p className="job__language" key={language}>
                        {language}
                      </p>
                    ))}
                  </p>
                  <p className="job__tools">
                    {eachJob.tools.map((eachTool) => (
                      <p className="job__tool" key={eachTool}>
                        {eachTool}
                      </p>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Learn>
      <Footer />
    </div>
  );
}

export default App;
