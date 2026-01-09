import {createContext} from "react";

interface IOnboardingState {
  skinType: string;
  allergens: string[],
}

interface IOnboardingFormContext {
  values: IOnboardingState,
  onChange: (name: string, val: string | string[],) => void,
}

export const generateDefaultQuestionnaire = () => ({
  skinType: '',
  allergens: [],
})

const onboardingFormContext = createContext<IOnboardingFormContext>({
  values: generateDefaultQuestionnaire(),
  onChange: () => {
  },
})

export default onboardingFormContext