import React from "react";
import Tabs from "../../components/Tabs";


export default function CharitiesLayout(){
  return (
    <>
      <Tabs items={[
        { label:"Why We Love", path:"/charities" },
        { label:"How We Work", path:"/charities/how-we-work" },
        { label:"Partner With JS", path:"/charities/partner-with-js" },
      ]}/>
    </>
  );
}
