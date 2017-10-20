import React, {Component} from 'react';

const API = 'AIzaSyBJlzFGjZ3fx1_z4XJao9YbkVIDtQBcTA0'
const playlistId = 'PL32BC9C878BA72085'
const result = 50;

var finalURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${playlistId}&part=snippet,id&order=date&maxResults=${result}`

class SQL extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }
clicked(){
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.snippet.resourceId.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}



  render(){
    console.log(finalURL);
    console.log(this.state.resultyt);

    return(
      <div>
          <button onClick={this.clicked}>MySQL</button>
            <div>
              {this.state.resultyt.map((link, i) => {
                var frame = <iframe style={{padding: 10}} key={i}  title="SQL" src={link} frameBorder="0" allowFullScreen></iframe>
                return frame;
                })
              }
            </div>
        </div>
    );
  }
}

export default SQL;
