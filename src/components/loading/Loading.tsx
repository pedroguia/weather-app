import { memo } from "react";
import Loader from "react-loader-spinner";

interface Props {
  text: string;
}

const Loading = ({ text }: Props) => (
  <div className="loading-container" data-testid="loading">
    <Loader type="Oval" color="white" height={75} width={75} />
    <p>{text}</p>
  </div>
);

export default memo(Loading);
