import React, { useState } from "react";
import "./tabs.css";
import FirstTab from "../alltabs/firsttab";
import SecondTab from "../alltabs/secondtab";
import ThirdTab from "../alltabs/thirdtab";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import RegisterDrug from "../../drugs/registerdrug";
import UserDetails from "../userdetails";
import Logoutuser from "../logout/logout";
import ViewDrugs from "../../drugs/viewdrugs";





const DTabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    //  Functions to handle Tab Switching
  const HandleTab1 = () => {
    // update the state to tab1
   // setActiveTab("tab1");
   //  <RegisterDrug />
  };
  const handleTab2 = () => {
    // update the state to tab2
   // setActiveTab("tab2");
  };

  return (
    <div className="">
    <UserDetails />
     <Logoutuser />

    <Tabs className="Tabs">
    <TabList>
      <Tab>View</Tab>
      <Tab>Add Product</Tab>
      <Tab>Buy</Tab>
    </TabList>
<TabPanel>
      <p>List Of Drugs</p>
     <ViewDrugs />
    </TabPanel>
    <TabPanel>
      <p>View Drugs</p>
       <RegisterDrug />
    </TabPanel>
    <TabPanel>
      <p>Buy!</p>
    </TabPanel>
  </Tabs>
  </div>
  );
};
export default DTabs;



