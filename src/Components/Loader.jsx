import { Loading } from "react-loading-dot";

function Loader() {
  return (
    <div>
      <Loading width="100px" height="100px" dots="3" background="var(--blue)" />
    </div>
  );
}

export default Loader;
