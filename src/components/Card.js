export const Card = ({ title, quantity }) => {
  return (
    <div className="col-3 mx-2 bg-secondary rounded p-1">
      <p className="text-white">{title}</p>
      <p className="text-white">{quantity}</p>
    </div>
  );
};
