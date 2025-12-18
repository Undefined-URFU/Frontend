import SearchInput from "components/ui/Inputs/SearchInput/SearchInput.tsx";
import {useContext} from "react";
import onboardingContext from "components/widgets/OnboardingForm/onboarding.context.ts";

const AllergensStep = () => {
  const context = useContext(onboardingContext);
  return (
    <div>
      <SearchInput
        onChange={context.onChange}
        placeholder='Аллерген...'
        name='allergensInput'
        value={context.values.allergensInput}
      />
    </div>
  );
};

export default AllergensStep;