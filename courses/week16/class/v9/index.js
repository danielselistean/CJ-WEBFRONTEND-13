
function Post(props) {
  const myStyle = {
    marginTop: "10px",
    backgroundColor: "green"
  }
  console.log(props)

  return (
    <div
      className="post"
      style={myStyle}
      onClick={props.onMyClick}
    >
      <h1>{props.title}</h1>
      <p>{props.content.join(' ')}</p>
    </div>
  )
}

class App extends React.Component {

  handleClick(event) {
    console.log('click div', event.target)
  }

  render() {
    const content = ['text1', 'text2']
    return (
      <div>
        <Post
          title="title1"
          content={content}
          onMyClick={this.handleClick}
        />
        <Post title="title2" content={content} />
      </div>
    )
  }
}

const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM)





