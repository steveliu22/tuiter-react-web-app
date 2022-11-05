import React from 'react';
import TuitStats from './tuit-stats';
import { useDispatch } from 'react-redux';
import { deleteTuit } from '../reducers/tuits-reducer'

function TuitItem (tuit) {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return (
    <li className="list-group-item">
        <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit.tuit._id)}></i>
    <div className="row">
        <div className="col-2 pt-1"><img className="center-block rounded-circle" src={`/images/${tuit.tuit.image}`} width="60px" height="60px"/>
            </div>
        <div className="col-10 pe-5">
            <div className="fw-bolder">{tuit.tuit.userName} <i class="fas fa-check-circle text-primary"></i>   <span
                    className="fw-normal"> {tuit.tuit.handle} { ' • ' } {tuit.tuit.time}</span></div>
            <div>
                <h6 className="h6 fw-normal"> {tuit.tuit.tuit} </h6>
            </div>

            <div className='pt-1'> <TuitStats tuit={tuit.tuit}/> </div>
        </div>

    </div>
</li>)
}

export default TuitItem;
