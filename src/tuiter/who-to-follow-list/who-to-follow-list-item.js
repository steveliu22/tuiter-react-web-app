function WhoToFollowListItem (props) {
  return (
      <li className="list-group-item">
      <div className="row align-items-center">
          <div className="col-2">
              <img className="float-start rounded-circle" src={`/images/${props.who.avatarIcon}`} width="50px"
                  height="50px"/>
          </div>
          <div className="col-6 pl-1">
              <div>
                  <h6 className="fw-bolder"/> {props.who.userName} <i className="fas fa-check-circle"></i>
              </div>
              <div>
                  <h6 className="fw-normal"/>{'@' + props.who.handle}
              </div>
          </div>

          <div className="col-4">
              <button type="button"
                  className="btn btn-primary rounded-pill w-30 float-end"> Follow </button>
          </div>
      </div>
  </li>)
}

export default WhoToFollowListItem
