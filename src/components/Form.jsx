function From() {
  return (
    <form className="form">
      <div className="form__wrap">
        <div className="input required" name="name">
          <label htmlFor="1">Name</label>
          <input id="1" type="text" placeholder="Name" />
        </div>
        <div className="input required" name="phone">
          <label htmlFor="2">Phone</label>
          <input id="2" type="text" placeholder="Phone" />
        </div>
        <div className="input required full-width" name="email">
          <label htmlFor="3">Email address</label>
          <input id="3" type="text" placeholder="Email" />
        </div>
      </div>
      <div className="button-group">
        <button className="button button-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default From
