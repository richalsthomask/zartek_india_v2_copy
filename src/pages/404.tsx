import { Link, PageProps } from "gatsby";
import React, { FC } from "react";

const NotFound: FC<PageProps> = () => (
  <main>
    <p>
      Sorry, page not found! <Link to="/">click here go back</Link>
    </p>
  </main>
);

export default NotFound;
