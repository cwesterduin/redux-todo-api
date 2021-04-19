import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import { Home, Todo, TodoSolo } from './pages'
import { Layout } from './layout'
import { useDispatch } from 'react-redux'
import { fetchTodos } from './actions';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  },[])

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={Todo} />
        <Route path="/todo/:id" component={TodoSolo} />
      </Switch>
    </Layout>
  );
};

export default App