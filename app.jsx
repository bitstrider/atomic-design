import ReactDOM from 'react-dom'
import Landing from 'pages/landing'
import Landing from 'views/EndSelector'
import Landing from 'views/StopSelector'

const app = (
  <Provider store={store}>
    <Router>
      <Route match={'/'} component={LineSelector} />
      <Route exact match={'/line/:lineId/ends'} component={EndSelector} />
      <Route exact match={'/line/:lineId/ends/:endId/stops'} component={StopSelector} />
      <Route exact match={'/line/:lineId/ends/:endId/stops/:stopId'} component={StopMonitor} />
      <Route exact match={'/landing'} component={Landing} />
    </Router>
  </Provider>
)

ReactDOM.render(element, app)
