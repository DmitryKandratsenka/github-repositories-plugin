import { HomePageToolbar, MainHeader } from "@/components/molecules";
import { AllCountries } from "@/components/organisms";
import { ContentContainer, MainContainer } from "@/components/templates";

export function HomePage() {
  return (
    <MainContainer>
      <MainHeader />
      <ContentContainer
        sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
      >
        <HomePageToolbar />
        <AllCountries />
      </ContentContainer>
    </MainContainer>
  );
}
