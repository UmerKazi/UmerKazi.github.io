import { Fragment, useEffect } from "react";
import { customCursor } from "../utilits";

const Cursor = () => {
  useEffect(() => {
    customCursor();
  });
  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </Fragment>
  );
};

export default Cursor;
