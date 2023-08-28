import { Box, Typography } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { CardWrapper } from './GithubRepoCard.styles';
import { useTranslation } from '@/hooks/useTranslation';
import { DescriptionLine } from '@/components/molecules/DescriptionLine';
import { GithubRepositoryModel } from '@/hooks/api/github/types';
import { useFavouriteRepo } from '@/hooks/useFavouriteRepo';
import { CardIconButton } from '@/components/atoms';
import { addFavourite, removeFavourite } from '@/redux';
import { UrlLink } from '@/components/atoms/UrlLink/UrlLink';
import { RepoRating } from '@/components/molecules/RepoRating';

interface Props {
  repo: GithubRepositoryModel;
}

export function GithubRepoCard({ repo }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const favouriteRepo = useFavouriteRepo(repo);

  return (
    <CardWrapper elevation={3} data-testid="github-repo-card">
      {favouriteRepo ? (
        <CardIconButton
          onClick={() => dispatch(removeFavourite(favouriteRepo))}
        >
          <Favorite />
        </CardIconButton>
      ) : (
        <CardIconButton
          color="primary"
          onClick={() => dispatch(addFavourite(repo))}
        >
          <FavoriteBorder />
        </CardIconButton>
      )}
      {!!favouriteRepo && (
        <RepoRating
          disabled={!favouriteRepo}
          sx={{
            bottom: (theme) => theme.spacing(1),
            position: 'absolute',
            right: (theme) => theme.spacing(1),
          }}
          repository={favouriteRepo}
        />
      )}
      <Box mx={2} my={4}>
        <Typography
          variant="h6"
          sx={{
            marginBottom: (theme) => theme.spacing(2),
            marginRight: (theme) => theme.spacing(5),
            wordBreak: 'break-all',
          }}
        >
          {repo.full_name}
        </Typography>
        <DescriptionLine
          title={t('id')}
          variantTitle="subtitle1"
          variantBody="body1"
          body={repo.id}
        />
        <DescriptionLine
          title={t('url')}
          variantTitle="subtitle1"
          variantBody="body1"
        >
          <UrlLink href={repo.html_url}>{repo.html_url}</UrlLink>
        </DescriptionLine>
      </Box>
    </CardWrapper>
  );
}
