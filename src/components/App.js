import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{


        state = { videos : [], slectedVideo: null };


        componentDidMount(){
            this.onTermSubmit('buildings');
        }

        onTermSubmit = async  term => {
          const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                 key:  'AIzaSyDFKDtoRtFkrIDBJwOPK7jyBwBuBW3nDAM',
                 q : term
            }
        });

        this.setState({ 
            videos : response.data.items ,
            slectedVideo :response.data.items[0]

        })
        console.log(response);
    };

    onVideoSelect= (video) =>{
        console.log('from the App', video);

        this.setState({ slectedVideo: video });

    }


    render() {
        return <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                    <VideoDetail video={this.state.slectedVideo}></VideoDetail>
                    </div>
                    <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                </div>
            </div>
            </div>;
    }
}

export default App;