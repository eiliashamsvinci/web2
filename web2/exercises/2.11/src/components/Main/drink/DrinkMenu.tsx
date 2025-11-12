import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import type { Drink } from "../../../types";

// interface DrinkMenuProps {
//   title: string;
//   children: ReactElement<typeof DrinkCard> | ReactElement<typeof DrinkCard>[];
// }

interface DrinkMenuProps {
  title: string;
  drinks: Drink[];
}

const DrinkMenu: React.FC<DrinkMenuProps> = ({ title, drinks }) => {
  return (
    // <div className="drink-menu">
    //   <h4>{title}</h4>
    //   <div className="drink-items">{}</div>
    // </div>

    <Container>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {drinks.map((drink, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <Card>
              <CardMedia
                component="img"
                image={drink.image}
                alt={drink.title}
                style={{ objectFit: "contain", height: "200px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {drink.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {drink.volume}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Prix: {drink.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DrinkMenu;
