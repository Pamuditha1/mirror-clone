import React, { useState } from "react";
import Banner2 from "../components/Banner2";
import Banner1 from "../components/Banner1";
import VideoImage from "../components/VideoImage";
import video1 from "../media/videos/2021HomepageLoopFinal_updated.mp4";
import Modal from "../components/Modal";
import Sider from "../components/Sider";
import VideoBanner from "../components/VideoBanner";
import VideoContainer from "../components/common/VideoContainer";
import Banner from "../components/common/Banner";
import LookBanner from "../components/LookBanner";
import StoreBanner from "../components/StoreBanner";
import Footer from "../components/Footer";
import LiveBanner from "../components/LiveBanner";
import MembershipBanner from "../components/MembershipBanner";
import Services from "../components/Services";
import ShoppingItems from "../components/ShoppingItems";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <VideoContainer marginT="0px" url={video1} />
      <Banner1 />
      <VideoImage handleOpenModal={handleOpenModal} />
      <Banner2 />
      <Banner
        title="Taught by the best instructors in the world."
        bText="Meet our instructors"
        bLink="https://www.mirror.co/instructors"
      />
      <Sider />
      <VideoBanner />
      <Banner
        subTitle="PROGRESS TRACKING"
        title="Performance metrics for personalized goal-setting."
        bText="Experience Mirror"
        bLink="https://www.mirror.co/shop/mirror"
      />
      <VideoContainer url="https://res.cloudinary.com/themirror/video/upload/v1/ecom/production/2021/11/11/18/57/36/20a6b082-a53b-459d-ba60-8ba281358e50/home-performance-metrics-cropped.mp4" />
      <Banner
        subTitle="SMART WEIGHTS"
        title="Fully-integrated smart weights that track reps and form."
        bText="Shop Now"
        bLink="https://www.mirror.co/accessories"
      />
      <VideoContainer url="https://res.cloudinary.com/themirror/video/upload/v1/ecom/production/2021/11/11/18/21/21/c24c8bad-a022-4c4b-9376-f8d18f978378/HomePage_SmartWeight_Desktop_2360x1432.mp4" />
      <Banner
        subTitle="MIRROR COMMUNITY"
        title="Work out or compete with friends."
        bText="Explore Workouts"
        bLink="https://www.mirror.co/workouts"
      />
      <VideoContainer
        container
        url="https://res.cloudinary.com/themirror/video/upload/v1/ecom/production/2021/11/11/06/12/19/deb075f7-4a73-49be-b097-c651ad807107/WorkoutOrCompete.mp4"
      />
      <Banner title="All used to create a personalized fitness plan just for you." />
      <MembershipBanner />
      <LookBanner />
      <Services />
      <ShoppingItems />
      <StoreBanner />
      <LiveBanner />
      <Footer />

      <Modal
        modalOpen={modalOpen}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}

export default Home;
