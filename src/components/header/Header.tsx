import { memo } from "react";

const Header = () => (
  <div className="component-header" data-testid="header">
    <div className="title">Weather App</div>
    <div className="credits">Developed by Pedro Guia</div>
  </div>
);

export default memo(Header);
