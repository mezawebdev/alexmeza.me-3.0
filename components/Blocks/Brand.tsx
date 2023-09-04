export default function Brand({ image }: { image: string }) {
  return (
    <div className="brand">
      <div>
        <img src={image} />
      </div>
    </div>
  );
}
