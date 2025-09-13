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
    title: 'Comunhão Espírita Cristo Redentor - CECRE',
    description: 'Rua Delmiro Gouveia, 1493, Salesianos, Juazeiro do Norte - CE, 63050-216.',
    image: '/public/logocecre.png',
    url: 'https://share.google/knHrUrYdcGvT2xIeq',
  },
  {
    id: 2,
    title: 'Grupo Espírita Paulo de Tarso - GEPT',
    description: 'R. Sr. do Bonfim, 859 - João Cabral, Juazeiro do Norte - CE, 63050-290.',
    image: '/public/logogept.jpg',
    url: 'https://maps.app.goo.gl/bqxmU5Pwp6WgUHje8',
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
              <Typography variant="body2">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component="a" href={card.url} target="_blank" rel="noopener noreferrer">
                Ver mapa
              </Button>
              
            </CardActions>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;