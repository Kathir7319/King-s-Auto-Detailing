import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import PricingMatrix from '../components/PricingMatrix';
import HowItWorks from '../components/HowItWorks';
import ServiceAreaMap from '../components/ServiceAreaMap';
import AutomatedSmsPreview from '../components/AutomatedSmsPreview';
import ReviewsSection from '../components/ReviewsSection';
import FaqSection from '../components/FaqSection';

export const HomePage = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  const handleSelectPackage = (packageId) => {
    navigate(`/booking?package=${packageId}`);
  };

  const handleExploreTransformations = () => {
    navigate('/transformations');
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero
        onOpenBooking={() => navigate('/booking')}
        onExploreTransformations={handleExploreTransformations}
        onSelectPackage={handleSelectPackage}
      />

      {/* 2. Interactive Transformation Gallery */}
      <BeforeAfterSlider
        onBookPackage={handleSelectPackage}
      />

      {/* 3. Visual Package Selection & Pricing Matrix */}
      <PricingMatrix
        onSelectPackage={handleSelectPackage}
      />

      {/* 4. How It Works (3 Easy Steps) */}
      <HowItWorks
        onOpenBooking={() => navigate('/booking')}
      />

      {/* 5. Service Area & Guarantee Map */}
      <ServiceAreaMap
        onOpenBooking={() => navigate('/booking')}
      />

      {/* 7. Behind-the-Scenes: Automated SMS Copy Templates */}
      <AutomatedSmsPreview />

      {/* Reviews Social Proof */}
      <ReviewsSection />

      {/* FAQ & Deposit Policy */}
      <FaqSection
        onOpenBooking={() => navigate('/booking')}
      />
    </div>
  );
};

export default HomePage;
