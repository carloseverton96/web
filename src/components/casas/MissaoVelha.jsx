import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
  {
    id: 1,
    title: 'CENTRO ESPÍRITA FRATERNIDADE CRISTA - CEFRAC',
    description: 'R. Padre José Fco Ferreira, 314 - Missão VelhaCE, 63200-000.',
    image: '/src/assets/logocefrac.jpg',
    url: 'https://maps.app.goo.gl/zZ9VezBC26xAzc757',
  },
  
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
        gap: 3,
        padding: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            component="a"
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
          >
            <CardMedia
              component="img"
              alt={card.title}
              height="140"
              image={card.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;