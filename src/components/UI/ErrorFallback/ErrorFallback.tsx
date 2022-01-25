import Button from 'components/UI/Button/Button';

const ErrorFallback: React.FC<{ error: any; resetErrorBoundary: any }> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div style={{ padding: '0.5rem', textAlign: 'center', margin: '0 auto' }}>
      <p>
        Something went wrong: <pre>{error.message}</pre>
      </p>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
};

export default ErrorFallback;
