import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';

function Todo() {
  const [newTask, setnewTask] = useState("");
  const [myList, setList] = useState([]);

  const addItem = (e) => {
    e.preventDefault();  // Prevent form submission

    if (newTask.trim()) {
      setList([...myList, { id: myList.length + 1, name: newTask, isDone: false }]);
      setnewTask("");
      console.log('addItem ran');
    }
  };

  const Done = (id) => {
    let listIndex = myList.findIndex(obj => obj.id === id);
    if (listIndex !== -1) {
      myList[listIndex].isDone = true;
      setList([...myList]);
    }
  };

  const unDone = (id) => {
    let listIndex = myList.findIndex(obj => obj.id === id);
    if (listIndex !== -1) {
      myList[listIndex].isDone = false;
      setList([...myList]);
    }
  };

  const Delete = (id) => {
    setList(myList.filter(item => item.id !== id));
  };

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center" id="heading">Todo Input</h3>
          <div className="card card-body my-3">
            <form onSubmit={addItem}>  {/* Use onSubmit here */}
              <div className="input-group">
                <input
                  type="text"
                  className="form-control text-capitalize"
                  placeholder="Add todo item"
                  value={newTask}
                  onChange={(e) => setnewTask(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block text-uppercase mt-5">
                  Add to Todo List
                </button>
              </div>
            </form>
            <div>
              <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo Lists</h3>
                {
                  myList.map((item) => {
                    return (
                      <div className={item.isDone ? 'delete' : ''} key={item.id}>
                        <li
                          id={item.isDone ? 'markdone' : ''}
                          className="list-group-item text-capitalize d-flex justify-content-between my-2"
                        >
                          <h6>{item.name}</h6>
                        </li>
                        <div className="text-right btn-group btn-group-sm" role="group">
                          <button type="button" onClick={() => Done(item.id)} className="btn r-1 btn-primary btn-sm">
                            Done
                          </button>
                          <button type="button" onClick={() => unDone(item.id)} className="btn btn-warning btn-sm float-right">
                            Undo
                          </button>
                          <button type="button" onClick={() => Delete(item.id)} className="btn btn-danger btn-sm float-right">
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
