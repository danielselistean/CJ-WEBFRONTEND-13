
class Post extends React.Component {

  constructor(props) {
    super(props)
    this.color = "red"
  }

  handleClick = (event) => {
    console.log('click div', event.target)
    this.color = "green";
    // this.forceUpdate()
    console.log(this);
  }

  render() {
    const myStyle = {
      marginTop: "10px",
      backgroundColor: this.color
    }
    return (
      <div
        className="post"
        style={myStyle}
        onClick={this.handleClick}
      >
        <h1>{this.props.title}</h1>
        <p>{this.props.content.join(' ')}</p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    const content = ['text1', 'text2']
    return (
      <div>
        <Post title="title1" content={content} />
        <Post title="title2" content={content} />
      </div>
    )
  }
}

const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM)





