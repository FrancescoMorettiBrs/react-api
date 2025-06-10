const Card = ({ character }) => {
  const { biography, birth_year, image, name, nationality } = character;
  return (
    <div className="card h-100" >
      <img src={image} className="card-img-top img-fluid w-100 object-fit-contain" style={{ height: "400px"}} alt={name} />
      <div className="card-body">
        <h3>{name}</h3>
        <p>{nationality}</p>
        <p>{birth_year}</p>
        <p className="card-text">{biography}</p>
      </div>
    </div>
  );
};

export default Card;