import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const HorizontalScrollLayout = ({ children }: Props) => {
  //this creates a class to hide the scrollbar
  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <ul className="flex whitespace-nowrap gap-10 pr-16 no-scrollbar">
        {children}
      </ul>
    </div>
  );
};

export default HorizontalScrollLayout;
