import {FormEvent, useState} from "react";
import {generateDefaultQuestionnaire} from "components/widgets/OnboardingForm/onboarding.context.ts";
import {userPreferencesApi} from "api/userPreferences/userPreferences.ts";
import useHttpLoader from "hooks/useHttpLoader/useHttpLoader.ts";
import {useSetAtom} from "jotai";
import {authAtom} from "stores/auth/auth.atom.ts";

const useOnboardingFormCtrl = () => {
  const {wait} = useHttpLoader()
  const [step, setStep] = useState<number>(1);
  const [questionnaire, setQuestionnaire] = useState(generateDefaultQuestionnaire());
  const setAuthState = useSetAtom(authAtom)
  const handleChange = (name: string, value: string | string[]) => {
    setQuestionnaire((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  }
  const handlePreviousStep = () => {
    setStep((step) => step - 1);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const data = {
      skinType: questionnaire.skinType,
      blacklist: questionnaire.allergens,
    }

    wait(userPreferencesApi.createPreferences(data), (resp)=>{
      if (resp.status === 'success') {
        setAuthState((prev)=>({...prev, isOnboarding: false}))
      }
    })

  }

  return {questionnaire, handleChange, step, handleNextStep, handlePreviousStep, handleSubmit};

}

export default useOnboardingFormCtrl;