/**
 * Example usage of MaxWidthWrapper:
 *
 * // Default maxWidth (xl)
 * <MaxWidthWrapper>
 *   <h1>Hero Section</h1>
 *   <p>This section is centered with max-w-7xl</p>
 * </MaxWidthWrapper>
 *
 * // Custom maxWidth
 * <MaxWidthWrapper maxWidth="lg" className="bg-gray-100 p-6">
 *   <h2>Features Section</h2>
 *   <p>This section has max-w-lg and centered horizontally</p>
 * </MaxWidthWrapper>
 *
 * // Full width with responsive padding
 * <MaxWidthWrapper maxWidth="full" className="px-4 md:px-8">
 *   <div>Full width section with horizontal padding</div>
 * </MaxWidthWrapper>
 */

interface MaxWidthWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

type MaxWidthKey = 'sm' | 'md' | 'lg' | 'xl' | 'full';

const maxWidthMap: Record<MaxWidthKey, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  maxWidth = 'xl',
  className = '',
  ...props
}) => {
  const maxWidthClass = maxWidthMap[maxWidth] || 'max-w-7xl';

  return (
    <div className={`${maxWidthClass} mx-auto ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
