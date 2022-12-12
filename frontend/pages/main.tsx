import Link from "next/link";
import React from "react";
import Card from "../components/main/card/Card";

const main = () => {
  return (
    <div>
      <p>main..</p>
      <Link href="/article/create">CREATE</Link>
      {/* <Card /> */}
    </div>
  );
};

export default main;
