import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  height: string; // Height parameter
};

const VerticalScrollLayout2x = ({ children, height }: Props) => {
  // Calculate height to ensure each child has the same size
  const childHeight = `calc((100% - 3px * (${React.Children.count(
    children
  )} - 1)) / ${React.Children.count(children)})`;

  return (
    <div
      className="overflow-y-scroll overflow-x-hidden scrollbar-hide"
      style={{ maxHeight: height, height: "100%" }}
    >
      <div className="flex">
        <div className="w-1/2">
          <ul
            className={`flex flex-col no-scrollbar gap-3`}
            style={{ height: `calc(100% + 3rem)` }}
          >
            {React.Children.map(
              children,
              (child, index) =>
                index % 2 === 0 && (
                  <li
                    key={index}
                    className={`flex-shrink-0 h-${childHeight} max-h-${childHeight}`}
                  >
                    {child}
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="w-1/2">
          <ul
            className={`flex flex-col no-scrollbar gap-3`}
            style={{ height: `calc(100% + 3rem)` }}
          >
            {React.Children.map(
              children,
              (child, index) =>
                index % 2 !== 0 && (
                  <li
                    key={index}
                    className={`flex-shrink-0 h-${childHeight} max-h-${childHeight}`}
                  >
                    {child}
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollLayout2x;
