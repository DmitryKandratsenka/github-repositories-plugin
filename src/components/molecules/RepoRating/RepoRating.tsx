import { Rating, RatingProps } from '@mui/material';
import { useDispatch } from 'react-redux';
import { StarBorder } from '@mui/icons-material';
import { GithubRepositoryModelUi } from '@/hooks/api/github/types';
import { updateFavourite } from '@/redux';

interface Props extends RatingProps {
  repository: GithubRepositoryModelUi;
}

export function RepoRating({ repository, ...other }: Props) {
  const dispatch = useDispatch();
  const handleChange: RatingProps['onChange'] = (event, value) => {
    if (!repository) return;

    dispatch(updateFavourite({ ...repository, rating: value }));
  };

  return (
    <Rating
      size="medium"
      precision={0.5}
      value={repository.rating}
      onChange={handleChange}
      emptyIcon={<StarBorder />}
      {...other}
    />
  );
}
