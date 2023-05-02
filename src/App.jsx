import Learn from "./Learn";
// import { bgImage } from "../static-job-listings-master/images/bg-header-desktop.svg";
import { Api } from "./data";
import "./App.css";

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
            <div key={eachJob.id} className="job__component">
              <div className="job__left-details">
                <img src={eachJob.logo} alt={eachJob.company} />
                <p className="job__categories">
                  <p>
                    {eachJob.company} {eachJob.new ? <span>New</span> : null}
                    {eachJob.featured && <span>Featured</span>}
                  </p>
                  <span>{eachJob.position}</span>
                  <span>
                    {eachJob.timePosted} . {eachJob.contract} .
                    {eachJob.location}
                  </span>
                </p>
              </div>
              <div className="job__right-details">
                <p>{eachJob.role}</p>
                <p>{eachJob.level}</p>
                <p className="job__languages">
                  {eachJob.progLanguage.map((language) => (
                    <p key={language}>{language}</p>
                  ))}
                </p>
                <p className="job__tools">
                  {eachJob.tools.map((eachTool) => (
                    <p key={eachTool}>{eachTool}</p>
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </Learn>
    </div>
  );
}

export default App;
