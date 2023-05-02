// import EachComponent from "./EachComponent";

export default function Learn(prop) {
  return (
    <div className="component">
      {/* <EachComponent props={Api} /> */}
      {prop.children}
    </div>
  );
}
