/**
 * Example usage:
 *
 * <Container maxWidth="lg">
 *   <p>This content is centered and has consistent horizontal padding</p>
 * </Container>
 */


interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const maxWidthMap: Record<string, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

const Container: React.FC<ContainerProps> = ({ children, maxWidth = 'xl', className = '', ...props }) => {
  return (
    <div className={`px-4 sm:px-6 lg:px-8 mx-auto ${maxWidthMap[maxWidth]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;


