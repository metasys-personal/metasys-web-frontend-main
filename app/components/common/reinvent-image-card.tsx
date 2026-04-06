type Props = {
  image: string;
  alt?: string;
};


export function ReinventImageCard({ image, alt }: Props) {
  return (
    <div className="h-full w-full overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={alt}
      />

      {/* subtle overlay like Accenture */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}