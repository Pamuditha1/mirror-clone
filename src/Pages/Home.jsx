import React, { useState } from "react";

import DescribeBanner from "../components/DescribeBanner";
import WorkoutsBanner from "../components/WorkoutsBanner";
import VideoImage from "../components/VideoImage";
import Slider from "../components/Slider";
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
import StartingVideo from "../components/StartingVideo";
import VideoModal from "../components/modals/VideoModal";
import ServiceModal from "../components/modals/ServiceModal";
import Reviews from "../components/Reviews";

function Home() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2, setModal2] = useState({ open: false, title: "", des: "" });

  const handleOpen1Modal = () => {
    setModal1Open(true);
  };

  const handleClose1Modal = () => {
    setModal1Open(false);
  };

  const handleOpen2Modal = ({ title, des }) => {
    setModal2({ open: true, title, des });
  };

  const handleClose2Modal = () => {
    setModal2({ ...modal2, open: false });
  };

  return (
    <>
      <StartingVideo />
      <DescribeBanner />
      <VideoImage
        modalOpen={modal1Open}
        handleOpenModal={handleOpen1Modal}
        handleCloseModal={handleClose1Modal}
      />
      <WorkoutsBanner />
      <Banner
        title="Taught by the best instructors in the world."
        bText="Meet our instructors"
        bLink="https://www.mirror.co/instructors"
      />
      <Slider />
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
      <Reviews />
      <LookBanner />
      <Services handleOpenModal={handleOpen2Modal} />
      <ShoppingItems />
      <StoreBanner />
      <LiveBanner />
      <Footer />
      <VideoModal
        modalOpen={modal1Open}
        handleOpenModal={handleOpen1Modal}
        handleCloseModal={handleClose1Modal}
      />
      <ServiceModal
        modal={modal2}
        handleOpenModal={handleOpen2Modal}
        handleCloseModal={handleClose2Modal}
      />
    </>
  );
}

export default Home;
