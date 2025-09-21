import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import logocecre from '/src/assets/logocecre.jpg'
import logogept from '/src/assets/logogept.jpg'
import logonossolar from '/src/assets/logonossolar.jpg'
import logocasadaesperanca from '/src/assets/logocasadaesperanca.jpg'
import logoevangelhoevida from '/src/assets/logoevangelhoevida.jpg'
import logosemeador from '/src/assets/logosemeador.jpg'
import educacao from '/src/assets/educacao.jpeg'
import logocasadocaminho from '/src/assets/logocasadocaminho.jpg'
import logogefis from '/src/assets/logogefis.jpg'
import logocemil from '/src/assets/logocemil.jpg'

const cards = [
  {
    id: 1,
    title: 'COMUNHÃO ESPÍRITA CRISTO REDENTOR - CECRE',
    description: 'Rua Delmiro Gouveia, 1493, Salesianos, Juazeiro do Norte - CE, 63050-216.',
    image: logocecre,
    url: 'https://maps.app.goo.gl/PCFFsQcVvXMsNFCM8',
  },
  {
    id: 2,
    title: 'GRUPO ESPÍRITA PAULO DE TARSO - GEPT',
    description: 'R. Sr. do Bonfim, 859 - João Cabral, Juazeiro do Norte - CE, 63050-290.',
    image: logogept,
    url: 'https://maps.app.goo.gl/bqxmU5Pwp6WgUHje8',
  },
  {
    id: 3,
    title: 'CENTRO ESPÍRITA CRISTÃO NOSSO LAR E AMBULATORIOS ANDRE LUIZ',
    description: 'AV. Paulo Maia, 870 - Antônio Vieira, Juazeiro do Norte - CE, 63022-455.',
    image: logonossolar,
    url: 'https://maps.app.goo.gl/eiRQuKQQvtoFXBjx9',
  },
  {
    id: 4,
    title: 'INSTITUIÇÃO ESPÍRITA CASA DA ESPERANCA',
    description: 'R. Geová Magalhães Sobreira - Tiradentes, Juazeiro do Norte - CE, 63031-035.',
    image: logocasadaesperanca,
    url: 'https://maps.app.goo.gl/g7seSkDu2wtE1sDi9',
  },
 {
    id: 5,
    title: 'Centro Espírita Fraternidade e Vida',
    description: 'R. Beato José Lourenço, 268 - Tiradentes, Juazeiro do Norte - CE, 63031-600',
    image: logoevangelhoevida,
    url: 'https://maps.app.goo.gl/PXLzJ54XBXXbXYWw9',
},
{
    id: 6,
    title: 'Grupo Fraterno O Semeador',
    description: 'Rua Pedro Cassiano dos Santos - Frei Damião, Juazeiro do Norte - CE',
    image: logosemeador,
    url: 'https://maps.app.goo.gl/JoinT7aPFXCVTwJV8',
},
{
    id: 7,
    title: 'Espaço Fraterno Maria de Nazaré',
    description: 'R. Martiniano de Santana, 673 - Tiradentes, Juazeiro do Norte - CE, 63031-160',
    image: educacao,
    url: 'https://maps.app.goo.gl/ct2Vf78vPsBtkPe19/', 
},
{
    id: 8,
    title: 'Centro Espírita Maria de Nazaré',
    description: 'R. Cel. Daudete Gondim, 26 - Antônio Vieira, Juazeiro do Norte - CE, 63041-145',
    image: educacao,
    url: 'https://maps.app.goo.gl/9JQGJzmoa49qacX49', 
},
{
    id: 9,
    title: 'Grupo Espírita Casa do Caminho - GECC',
    description: 'R. da Paz, 1728 - João Cabral, Juazeiro do Norte - CE, 63051-050',
    image: logocasadocaminho,
    url: 'https://maps.app.goo.gl/YRjEuFqyonTe9hX59', // adicionar link exato do Google Maps
},
{
    id: 10,
    title: 'Grupo da Fraternidade Irmã Sheila GEFIS',
    description: 'Rua Coronel Nery, 802 - Pio XII, Juazeiro do Norte - CE, 63020-330',
    image: logogefis,
    url: 'https://maps.app.goo.gl/rFEQ4fJY1F8eCNYK8',
},
{
    id: 11,
    title: 'Centro Espírita Missionários da Luz',
    description: 'Vila Afonso Melo, 62 - Salesianos, Juazeiro do Norte - CE, 63050-193',
    image: logocemil,
    url: 'https://maps.app.goo.gl/5LtRKCDbfKbjdWC78',
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
