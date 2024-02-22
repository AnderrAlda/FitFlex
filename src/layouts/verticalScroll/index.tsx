import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  height: string; // Height parameter
};

const VerticalScrollLayout = ({ children, height }: Props) => {
  // Calculate height to ensure each child has the same size
  const childHeight = `calc((100% - 3px * (${React.Children.count(
    children
  )} - 1)) / ${React.Children.count(children)})`;

  return (
    <div
      className="overflow-y-scroll scrollbar-hide"
      style={{ maxHeight: height, height: "100%" }}
    >
      <ul
        className={`flex flex-col no-scrollbar gap-3`}
        style={{ height: `calc(100% + 3rem)` }}
      >
        {React.Children.map(children, (child, index) => (
          <li
            key={index}
            className={`flex-shrink-0 h-${childHeight} max-h-${childHeight}`}
          >
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalScrollLayout;
