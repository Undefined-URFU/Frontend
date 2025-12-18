import SearchInput from "components/ui/Inputs/SearchInput/SearchInput.tsx";
import {useContext} from "react";
import onboardingContext from "components/widgets/OnboardingForm/onboarding.context.ts";

const InterestsStep = () => {
  const context = useContext(onboardingContext);
  return (
    <div>
      <SearchInput
        placeholder='Категория...'
        onChange={context.onChange}
        name='categoriesInput'
        value={context.values.categoriesInput}
      />
    </div>
  );
};

export default InterestsStep;