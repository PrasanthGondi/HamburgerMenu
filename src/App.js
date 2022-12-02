import {Route, Switch, Redirect, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="not-found" />
            </Switch>
          </>
        }
      >
        {close => (
          <>
            <button onClick={() => close()} type="button">
              <IoMdClose />
            </button>
            <Link to="/">
              <div>
                <AiFillHome />
                <h1>Home</h1>
              </div>
            </Link>
            <Link to="/about">
              <div>
                <BsInfoCircleFill />
                <h1>About</h1>
              </div>
            </Link>
          </>
        )}
      </Popup>
    </div>
  </>
)

export default App
