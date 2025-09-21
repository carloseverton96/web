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
    title: 'CENTRO ESPÍRITA BEZERRA DE MENEZES',
    description: 'R. Nelson Alencar, 355 - Centro, Crato - CE, 63100-110.',
    image: '/src/assets/logobezerra.jpg',
    url: 'https://maps.app.goo.gl/pCTLXGE9kSgFzBYL7',
  },
  {
    id: 2,
    title: 'ASSOCIAÇÃO ESPÍRITA ALLAN KARDEC',
    description: 'R. Padre Ibiapina, 190 - Santa Luzia, Crato - CE, 63101-020.',
    image: '/src/assets/logoassociacapallankardec.jpg',
    url: 'https://maps.app.goo.gl/8vYmzUvDkrGo9KGt7',
  },
  {
    id: 3,
    title: 'LAR ESPÍRITA DISCÍPULOS DE JESUS',
    description: 'R. dos Cariris, 92 - Vila Alta, Crato - CE, 63113-622.',
    image: '/src/assets/logodiscipulosdejesus.jpg',
    url: 'https://maps.app.goo.gl/jkPieMMUKeroNuD99',
  },
  {
    id: 4,
    title: 'CENTRO ESPÍRITA ANDRÉ LUIZ - CEAL',
    description: 'R. Delmiro Gouvêia, 67 - Ossian Araripe "Caixa Dágua", Crato - CE, 63107-070.',
    image: '/src/assets/logoceal.jpg',
    url: 'https://maps.app.goo.gl/4BqK5kDsvA9rj3A18',
  },
  {
    id: 5,
    title: 'LAR ESPÍRITA O BOM SAMARITANO',
    description: 'R. Primeiro de Maio, 185 - São Miguel, Crato - CE, 63122-200.',
    image: '/src/assets/logoobomsamaritano.jpg',
    url: 'https://maps.app.goo.gl/86L36YaY6yp3FaDj8',
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