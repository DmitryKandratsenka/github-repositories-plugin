import { Toolbar } from "@/components/molecules";
import { useTranslation } from "@/hooks/useTranslation";
import { BackButton } from "@/components/atoms/buttons/BackButton/BackButton";

export function CountryDetailsPageToolbar() {
  const { t } = useTranslation();
  return (
    <Toolbar>
      <BackButton />
    </Toolbar>
  );
}
