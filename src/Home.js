import React from "react";
import { Button } from "leslie_simple_library";
import { Header, Footer } from "library_using_webpack";
import Cool from "usegrowl_library";
import { Requirements } from "library_using_stroyboard";

export const Home = () => {
  return (
    <div>
      <Button />
      <Header />
      <Footer />
      <Cool />
      <Requirements />
    </div>
  );
};
