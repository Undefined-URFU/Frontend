import {createContext} from "react";

interface IOnboardingState {
  skinType: string;
  allergens: string[],
  categories: string[],
  allergensInput: string,
  categoriesInput: string,
}

interface IOnboardingFormContext {
  values: IOnboardingState,
  onChange: (val: string, name: string) => void,
}

export const generateDefaultQuestionnaire = () => ({
  skinType: '',
  allergensInput: '',
  allergens: [],
  categoriesInput: '',
  categories: []
})

const onboardingFormContext = createContext<IOnboardingFormContext>({
  values: generateDefaultQuestionnaire(),
  onChange: () => {
  },
})

export default onboardingFormContext