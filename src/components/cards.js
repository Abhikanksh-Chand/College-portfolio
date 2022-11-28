function cards(props) {
  return (
    <div className="card-container">
      <a href={props.link} target="_blank">
        <div className="card-header">
          <img src={props.img} />
          <h1>{props.title}</h1>
        </div>
        <div className="card-content">
          <h3>{props.description}</h3>
        </div>
      </a>
    </div>
  );
}

export default cards;
