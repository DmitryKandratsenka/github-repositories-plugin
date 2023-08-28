import { Typography } from '@mui/material';
import { EmptyCardWrapper } from '@/components/molecules/GithubRepoCard/GithubRepoCard.styles';
import { useTranslation } from '@/hooks/useTranslation';

export function EmptyRepositoriesCard() {
  const { t } = useTranslation();

  return (
    <EmptyCardWrapper>
      <Typography variant="caption">
        {t('no.repositories.have.been.found')}
      </Typography>
    </EmptyCardWrapper>
  );
}
