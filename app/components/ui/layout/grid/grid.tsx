/**
 * Usage Example:
 *
 * <Grid sm={1} md={3} lg={4} gap="gap-6">
 *   <div className="bg-red-200 p-4">Div 1</div>
 *   <div className="bg-red-200 p-4">Div 2</div>
 *   <div className="bg-red-200 p-4">Div 3</div>
 *   <div className="bg-red-200 p-4">Div 4</div>
 * </Grid>
 *
 * Mobile (sm): 1 column
 * Tablet (md): 3 columns
 * Desktop (lg): 4 columns
 */

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  sm?: 1 | 2 | 3 | 4 | 6 | 12;
  md?: 1 | 2 | 3 | 4 | 6 | 12;
  lg?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: string;
  children?: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({
  sm = 1,
  md = 2,
  lg = 4,
  gap = "gap-4",
  children,
  className = "",
  ...props
}) => {
  const columnMap = {
    sm: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      6: "grid-cols-6",
      12: "grid-cols-12",
    },
    md: {
      1: "md:grid-cols-1",
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
      6: "md:grid-cols-6",
      12: "md:grid-cols-12",
    },
    lg: {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      6: "lg:grid-cols-6",
      12: "lg:grid-cols-12",
    },
  };

  const classes = [
    "grid",
    columnMap.sm[sm],
    columnMap.md[md],
    columnMap.lg[lg],
    gap,
    className,
  ].join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Grid;
