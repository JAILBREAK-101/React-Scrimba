// import EachComponent from "./EachComponent";

export default function Learn(prop) {
  return (
    <div className="job">
      {/* <EachComponent props={Api} /> */}
      {prop.children}
    </div>
  );
}
