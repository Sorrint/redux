import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { getErrors } from './store/errors';
import configureStore from './store/store';
import {
    titleChanged,
    taskDeleted,
    completeTask,
    getTasks,
    getTasksLoadingStatus,
    loadTasks,
    taskCreated
} from './store/task';

const store = configureStore();

const App = (params) => {
    const state = useSelector(getTasks());
    const isLoading = useSelector(getTasksLoadingStatus());
    const error = useSelector(getErrors());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTasks());
    }, []);

    const changeTitle = (taskId) => {
        dispatch(titleChanged(taskId));
    };

    const deleteTask = (taskId) => {
        dispatch(taskDeleted(taskId));
    };

    const createTask = (id, title, completed) => {
        dispatch(taskCreated(id, title, completed));
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <p>{error}</p>;
    }
    return (
        <>
            <h1>App</h1>
            <button onClick={() => createTask('New task', false)}>Add Task</button>
            <ul>
                {state.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p> {`Completed: ${el.completed}`}</p>

                        <button onClick={() => dispatch(completeTask(el.id))}>Complete</button>
                        <button onClick={() => changeTitle(el.id)}>ChangeTitle</button>
                        <button onClick={() => deleteTask(el.id)}>delete Task</button>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
