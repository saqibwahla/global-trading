import AboutUsDetail from "@/components/AboutUs";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Blog Details Page for NextCommerce Template",
  // other metadata
};

const AboutUsDetailPage = () => {
  return (
    <main>
      <AboutUsDetail />
    </main>
  );
};

export default AboutUsDetailPage;
