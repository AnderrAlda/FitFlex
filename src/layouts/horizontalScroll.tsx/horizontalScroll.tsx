import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const HorizontalScrollLayout = ({ children }: Props) => {
  return (
    <div className="overflow-x-auto">
      <ul className="flex whitespace-nowrap gap-10">{children}</ul>
    </div>
  );
};

export default HorizontalScrollLayout;
