import React from "react";
import {
  MessageCircle,
  Activity,
  Bell,
  PhoneCall,
} from "lucide-react";

// update these paths to match your actual assets
import phoneMock from "../assets/Frames/Frame 1984077542mobile-appframes.svg";
import googlePlayBadge from "../assets/Frames/image 67googleplay.png";
import appStoreBadge from "../assets/Frames/image 68appstore.png";

const AppDownloadSection = () => {
  return (
    <section className="w-full bg-[#FFF7E2] py-20 ">
      <div
        className="
          mx-auto flex md:max-w-7xl flex-col items-center
          gap-12 px-8
          md:flex-row md:items-start md:justify-between
          md:gap-16 
        "
      >
        {/* LEFT COLUMN */}
        <div className="w-full md:max-w-[420px] lg:max-w-[460px] flex flex-col">
          {/* Heading */}
          <h2 className="text-[32px] font-semibold leading-[42px] text-[#3A643B] md:text-[36px] md:leading-[46px]">
            Download Amrutam Ayurveda
            <br />
            App Now
          </h2>

          {/* Description */}
          <p className="mt-4 text-[13px] leading-relaxed text-[#4F4F4F] md:text-sm">
            The Amrutam Ayurveda App is your one–stop app for all things
            Ayurveda! Apart from mimicking the website, the app has added
            benefits
          </p>

          {/* Feature cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FeatureCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="Access To Prescriptions"
            />
            <FeatureCard
              icon={<Activity className="h-5 w-5" />}
              title="Track Health Efficiently"
            />
            <FeatureCard
              icon={<PhoneCall className="h-5 w-5" />}
              title="Direct Chat With Doctors"
            />
            <FeatureCard
              icon={<Bell className="h-5 w-5" />}
              title="In-App Reminders For Consultations"
            />
          </div>

          {/* Store badges */}
          <div className="mt-8 flex  items-center gap-4">
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="h-11 md:h-16 w-auto cursor-pointer"
            />
            <img
              src={appStoreBadge}
              alt="Download on the App Store"
              className="h-11 md:h-16 w-auto cursor-pointer"
            />
          </div>
        </div>

        {/* RIGHT COLUMN – single exported SVG frame */}
        <div className="w-full md:flex md:justify-end">
          <img
            src={phoneMock}
            alt="Amrutam App preview with engagement metrics"
            className="
              mx-auto w-full max-w-[360px]
              md:mx-0 md:max-w-[480px]
              lg:max-w-[520px]
              drop-shadow-2xl
            "
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-3 rounded-3xl border border-[#DCD8CD] bg-[#FFF7E2] px-5 py-4 shadow-[0_8px_18px_rgba(0,0,0,0.03)]">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4F0E5] text-[#3A643B]">
        {icon}
      </div>
      <p className="text-xs font-medium leading-snug text-[#3A643B]">
        {title}
      </p>
    </div>
  );
};

export default AppDownloadSection;
