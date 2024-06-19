import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import FaceIcon from "@mui/icons-material/Face";

const StyledCard = styled(Card)`
  height: 100%;
`;
export const RecipesList = ({ recipes }) => {
  return (
    <Grid container spacing={3} padding={{ xs: 0, md: 3, lg: 5 }}>
      {recipes.map((recipe) => (
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            <CardMedia
              sx={{ height: 140 }}
              image={recipe.recipe.image}
              title={recipe.recipe.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              <Typography border={1} color="primary">
                Calories {recipe.recipe.calories}
              </Typography>
              {recipe.recipe.ingredientLines.map((ingredientLine) => (
                <Typography gutterBottom variant="body2" component="div">
                  {ingredientLine}
                </Typography>
              ))}
              <hr></hr>
              {recipe.recipe.healthLabels.map((healthLabel) => (
                <Chip
                  label={healthLabel}
                  variant="outlined"
                  size="small"
                  color="info"
                />
              ))}
              <Divider>
                <Chip
                  size="small"
                  icon={<FaceIcon />}
                  label={recipe.recipe.source}
                />
              </Divider>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};
