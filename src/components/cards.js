

function cards(props) {
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={props.img} />
        <h1>{props.title}</h1>
      </div>
      <div className="card-content">
       <h3>{props.description}</h3>
      </div>
    </div>
  );
}

export default cards;
