import { ThreeCircles } from "react-loader-spinner";

export const Loader = () => {
  return (<ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="rgb(255, 199, 0)"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />)
}