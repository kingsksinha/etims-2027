import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/common/Button';
import Container from '../components/common/Container';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-16">
      <Container className="text-center">
        <span className="font-heading text-8xl font-black text-primary/20 md:text-9xl">
          404
        </span>
        <h1 className="mt-4 font-heading text-2xl font-bold text-text-dark sm:text-3xl md:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-text-muted sm:text-base">
          The page you are looking for does not exist or has been moved to another URL.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/">
            <Button variant="primary" size="md" className="gap-2">
              <Home className="h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
