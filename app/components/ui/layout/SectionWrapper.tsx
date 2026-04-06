/**
 * Example usage:
  <SectionWrapper paddingY="py-4 md:py-8" paddingX="px-4 md:px-12">
   <h2>Features</h2>
   <p>Section content goes here...</p>
 </SectionWrapper>
 */


interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  paddingY?: string; // e.g. "py-8 md:py-12"
  paddingX?: string; // e.g. "px-4 md:px-12"
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  paddingY = 'py-8',
  paddingX = '',
  className = '',
  ...props
}) => {
  return (
    <section
      className={`${paddingY} ${paddingX} ${className}`.trim()}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
