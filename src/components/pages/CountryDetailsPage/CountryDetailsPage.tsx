import { useParams } from "react-router-dom";
import { ContentContainer, MainContainer } from "@/components/templates";
import { MainHeader } from "@/components/molecules";
import { useCountryByCode } from "@/hooks/api/rest-countries/useCountryByCode";
import { CountryDetailsPageToolbar } from "@/components/molecules/toolbars/CountryDetailsPageToolbar";

export function CountryDetailsPage() {
  const { alpha3Code } = useParams();

  const { data } = useCountryByCode(alpha3Code);

  return (
    <MainContainer>
      <MainHeader />
      <ContentContainer
        sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
      >
        <CountryDetailsPageToolbar />
      </ContentContainer>
    </MainContainer>
  );
}
