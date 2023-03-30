"use client";
import React from "react";
import Lottie from "lottie-react";
import bookReading from "@/assets/lotties/hero.json";

const HeroCharater = () => <Lottie animationData={bookReading} loop={false} />;

export default HeroCharater;