import React from "react";
import TopHeader from "../components/organisms/TopHeader";
import NavHeader from "../components/organisms/NavHeader";
import SubjectSection from "../components/organisms/SubjectSection";
import Subscribe from "../components/molecules/Subscribe";
import BookCard from "../components/molecules/BookCard";
import LocationCard from "../components/molecules/LocationCard";

const Dashboard = () => {
  return (
    <div>
      <TopHeader />
      <NavHeader />
      <SubjectSection />
      <Subscribe />
      <BookCard />
      <LocationCard />
    </div>
  );
};

export default Dashboard;
