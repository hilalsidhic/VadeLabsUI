import TopLeft from "./TopLeft";
import TopRight from "./TopRight";

function FirstDiv() {
  return (
    <div className="flex flex-row h-screen items-center justify-between">
      <TopLeft />
      <TopRight/>
    </div>
  );
}

export default FirstDiv;
