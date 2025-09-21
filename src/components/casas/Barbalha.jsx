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
    title: 'CENTRO ESPÍRITA LUZ DO CAMINHO - CELC',
    description: 'Av. Gen. Costa Cavalcante, 790 - Centro, Barbalha - CE, 63180-000.',
    image: process.env.PUBLIC_URL + '/src/assets/logoluzdocaminho.jpg',
    url: 'https://maps.app.goo.gl/QKsGBiQh5bNbGQYw5',
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