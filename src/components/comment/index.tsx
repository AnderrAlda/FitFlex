type Props = {
  name: string;
  rating: number;
  date: string;
  comment: string;
};

const Comment = ({ name, rating, date, comment }: Props) => {
  return (
    <>
      <div className="mt-3">
        <div className="relative">
          <p className="absolute">{name}</p>
          <p className="text-right mr-5">{date}</p>
        </div>
        <p className="mt-3">Valoration: {rating}/5</p>
        <p className="mt-3">Comment: {comment}</p>
      </div>
    </>
  );
};

export default Comment;
