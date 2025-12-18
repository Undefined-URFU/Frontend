import {useState} from "react";
import {generateDefaultQuestionnaire} from "components/widgets/OnboardingForm/onboarding.context.ts";


// const stepNumbers: Record<StepType, number> = {
//   skinType: 1,
//   allergy: 2,
//   interests: 3,
// };

const useOnboardingFormCtrl = () => {
  const [step, setStep] = useState<number>(1);
  const [questionnaire, setQuestionnaire] = useState(generateDefaultQuestionnaire());

  const handleChange = (value: string, name: string) => {
    setQuestionnaire((prev) => ({...prev, [name]: value}));
  }
  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  }
  const handlePreviousStep = () => {
    setStep((step) => step - 1);
  }
  return {questionnaire, handleChange, step, handleNextStep, handlePreviousStep};

}

export default useOnboardingFormCtrl;