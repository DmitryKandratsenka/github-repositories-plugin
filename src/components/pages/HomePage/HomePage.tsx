import { MainHeader } from "@/components/molecules";
import { ContentContainer, MainContainer } from "@/components/templates";
import { MainPageToolbar } from "@/components/molecules/HomePageToolbar/HomePageToolbar";

export function HomePage() {
  return (
    <MainContainer>
      <MainHeader />
      <ContentContainer
        sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
      >
        <MainPageToolbar />
      </ContentContainer>
    </MainContainer>
  );
}
