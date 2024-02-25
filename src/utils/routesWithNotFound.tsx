import { ReactNode } from "react";
import { Route, Routes } from "react-router";

interface Props {
  children: ReactNode;
}

const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<>NOT FOUND</>} />
    </Routes>
  );
};

export default RoutesWithNotFound;
