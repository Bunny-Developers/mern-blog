import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <Container maxWidth="md" className={styles.container}>
      <Box className={styles.content}>
        <Typography variant="h1" className={styles.title}>
          404
        </Typography>
        <Typography variant="h4" className={styles.subtitle}>
          Oops! Page not found
        </Typography>
        <Typography variant="body1" className={styles.description}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          className={styles.button}
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;