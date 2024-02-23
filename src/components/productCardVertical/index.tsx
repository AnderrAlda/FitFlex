interface StaticAsset {
  Image: string;
}
type Image = StaticAsset | string;

type Props = {
  name: string;
  img: Image;
  price: number;
};

const ProductCardVertical = ({ name, img, price }: Props) => {
  let src: string; // Define a variable to hold the src value

  if (typeof img === "string") {
    // If img is a string, directly assign it to src
    src = img;
  } else {
    // If img is an object of type StaticAsset, choose one of its properties as src
    src = img.Image; // You may need to handle other cases here based on your requirements
  }

  return (
    <>
      {" "}
      <div className="bg-red-100 w-40 h-42 rounded-2xl mt-4">
        <img
          className="w-40 h-40 object-cover p-3 rounded-3xl"
          src={src}
          alt="RogueAlpacaSled"
        />
        <div className="ml-3 mb-2">
          <p>{name}</p>
          <p>USD {price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCardVertical;
