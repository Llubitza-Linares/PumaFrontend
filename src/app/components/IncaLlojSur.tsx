//import styles from './page.module.css'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Grid } from '@mui/material';
import { cardData } from '../../data/card';


export default function Incallojeta2() {
    const containerStyle = {
        backgroundColor: '	#ffdab9', 
        minHeight: '100vh',
      };
      const textStyle = {
        color: '#ff0000', 
      };
      return (
        <main 
        // className={styles.main} 
        style={containerStyle}>
    <h1>Ruta Incallojeta Sur</h1>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="45vh" 
    >
    <img src="/ruta2.png"
              alt="ruta2"
              width={520}
              height={160}
              />
    <img src="/ruta2_1.png"
              alt="ruta2.1"
              width={520}
              height={160}
              />
              </Box>
          {/* <div 
          // className={styles.center}
          >
          </div> */}
          <Grid container spacing={2}>
          {cardData.map(card => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card >
              <img src="/pumita.png"
              alt="puma logo"
              width={90}
              height={70}
              />
                <CardContent>
                  <Typography variant="h5" component="h2" style={textStyle}>
                    {card.title}
                  </Typography>
                  <Typography color="body2" gutterBottom>
                    {card.subtitle}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </main>
  );
}