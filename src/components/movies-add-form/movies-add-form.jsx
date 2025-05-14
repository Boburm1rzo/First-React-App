import "./movies-add-form.css";

const MoviesAddForm = () => {
  return (
    <div className="movies-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-from d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
        ></input>
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Nechchi marotaba ko'rilgan?"
        ></input>
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default MoviesAddForm;
