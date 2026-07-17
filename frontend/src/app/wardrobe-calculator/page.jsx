"use client";

import { useState } from "react";

import WardrobeTypeStep from "@/components/wardrobeCalculator/WardrobeTypeStep";
import DimensionStep from "@/components/wardrobeCalculator/DimensionStep";
import FinishStep from "@/components/wardrobeCalculator/FinishStep";
import ContactStep from "@/components/wardrobeCalculator/ContactStep";
import ResultStep from "@/components/wardrobeCalculator/ResultStep";

export default function WardrobeCalculatorPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    type: "",
    dimension: "",
    finish: "",
   
    name: "",
    phone: "",
    email: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <main className="min-h-screen bg-[#F5EBE0] py-16">
      <div className="container mx-auto px-4">

        {step === 1 && (
          <WardrobeTypeStep
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <DimensionStep
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <FinishStep
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        

        {step === 4 && (
          <ContactStep
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 5 && (
          <ResultStep formData={formData} />
        )}

      </div>
    </main>
  );
}