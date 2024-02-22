type CategoriesProps = {
  name: string;
  selected: boolean;
  onClick: (name: string) => void;
};

const Categories = ({ name, selected, onClick }: CategoriesProps) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <div
      className={`flex justify-center items-center rounded-lg ${
        selected ? "bg-black text-white" : "bg-white text-black"
      } cursor-pointer`}
      onClick={handleClick}
    >
      <p className="mx-3">{name}</p>
    </div>
  );
};

export default Categories;
