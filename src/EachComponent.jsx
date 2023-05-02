// import { useState } from "react";
export default function EachComponent(props) {
  // FUNCTION AND VARIABLES FOR ADDING A NEW JOB
  // const [job, setJob] = useState(null);
  // let handleSetJob = () => {
  //   setJob(job);
  // };
  props.map((eachJob) => {
    return (
      <div key={eachJob.id}>
        <div className="job-component">
          <div className="left">
            <img src={eachJob.logo} alt={eachJob.company} />
            <p>
              <span>
                {eachJob.company} {eachJob.new} {eachJob.featured}
              </span>
              <span>{eachJob.position}</span>
              <span>
                {eachJob.timePosted} . {eachJob.contract} . {eachJob.location}
              </span>
            </p>
          </div>
          <div className="right">
            <p>{eachJob.role}</p>
            <p>{eachJob.level}</p>
            <p>{eachJob.languages}</p>
            {/* <p>{eachJob.}</p>
            <p>{eachJob.}</p> */}
          </div>
        </div>
      </div>
    );
  });
}

// DEMONSTRATING CLOSURES IN JAVASCRIPT.
// let newFunc = () => {
//   let oldFunc = () => {
//     let valueOldFunc = 62;
//   };
//   return valueOldFunc;
// };

// Closures are only available using the var keyword, since they have to deal with variables

// React use Effect is used for asynchronous data

// As long as a variable is accessible to a function, that variable is in closure with that function

// React listens to state and not local variables

// Deep down asynchronous actions take place, but JavaScript is single threaded, so it handles this asynchronous actions using the browser

// let latestValue = newFunc();
// latestValue();
