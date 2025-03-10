import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ResearchSection({title, body, photo, alttext}: {title:string, body:string, photo:string, alttext:string}) {
  return (
    <>
      <Card sx={{ display: 'flex', margin: '.75rem'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="h5" gutterBottom align='left'>
              {title}
            </Typography>
            <Typography variant="h6" gutterBottom align='left' className='mb-3'>
              {body}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ 
            width: { xs: '100%', sm: '200px' },
            height: 'auto',
            maxHeight: '300px',
            maxWidth: '300px',
            objectFit: 'cover',
            borderRadius: '4px',
            order: { xs: -1, sm: 1 }
          }}
          image={photo}
          alt={alttext}
        />
    </Card>
    </>
  );
}