import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  gap: number;
};

const HorizontalScrollLayout = ({ children, gap }: Props) => {
  // Calculate width to ensure each child has the same size
  const childWidth = `calc((100% - ${gap}px * (${React.Children.count(
    children
  )} - 1)) / ${React.Children.count(children)})`;

  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <ul
        className={`flex no-scrollbar gap-${gap}`}
        style={{ width: `calc(100% + ${gap}px)` }}
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
