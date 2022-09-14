import { ReactElement, memo } from "react";

interface Props {
  children: ReactElement;
  dataTestId?: string;
}

const Card = ({ children, dataTestId = "card-component" }: Props) => (
  <div className="card" data-testid={dataTestId}>
    {children}
  </div>
);

export default memo(Card);
