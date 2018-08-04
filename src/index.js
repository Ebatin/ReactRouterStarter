import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'

class IndexComponent extends Component {
	render() {
		return(
			<p>React Router Starter</p>
		)
	}
}

render( <IndexComponent />, document.querySelector("#root"))
