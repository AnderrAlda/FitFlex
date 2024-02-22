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
      className={`flex justify-center items-center rounded-2xl w-32 ${
        selected ? "bg-black text-white" : "bg-white text-black"
      } cursor-pointer`}
      onClick={handleClick}
    >
      <p className="mx-6">{name}</p>
    </div>
  );
};

export default Categories;
