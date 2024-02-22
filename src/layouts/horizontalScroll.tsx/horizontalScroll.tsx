import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const HorizontalScrollLayout = ({ children }: Props) => {
  // Calculate width to ensure each child has the same size
  const childWidth = `calc((100% - 3px * (${React.Children.count(
    children
  )} - 1)) / ${React.Children.count(children)})`;

  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <ul
        className={`flex no-scrollbar gap-3`}
        style={{ width: `calc(100% + 3rem)` }}
      >
        {React.Children.map(children, (child, index) => (
          <li
            key={index}
            className={`flex-shrink-0 w-${childWidth} max-w-${childWidth}`}
          >
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HorizontalScrollLayout;
