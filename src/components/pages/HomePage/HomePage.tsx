import { useSelector } from 'react-redux';
import { HomePageToolbar, MainHeader } from '@/components/molecules';
import { ContentContainer, MainContainer } from '@/components/templates';
import RepositoriesList from '@/components/organisms/RepositoriesList/RepositoriesList';
import { selectApplicationState } from '@/redux/slices/applicationSlice';
import { FavouriteRepositoryList } from '@/components/organisms/FavouriteRepositoryList';

export function HomePage() {
  const { selectedFilter } = useSelector(selectApplicationState);

  return (
    <MainContainer>
      <MainHeader />
      <ContentContainer>
        <HomePageToolbar />
        {selectedFilter === 'all' && <RepositoriesList />}
        {selectedFilter === 'favourites' && <FavouriteRepositoryList />}
      </ContentContainer>
    </MainContainer>
  );
}
