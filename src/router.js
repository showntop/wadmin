import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

import App       from './routes/App';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
      	<IndexRoute component={IndexPage} />
	    <Route path="about" component={IndexPage} />
	    <Route path="inbox" component={IndexPage} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
