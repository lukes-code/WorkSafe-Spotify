import React from 'react';
import { millisToMinutesAndSeconds } from '../helper';
import Progress from './Progress';

class SafeTracks extends React.Component {
    
    render() {
        if(this.props.safeTrack !== null){
            return (
                <div className="track" id="safe">
                    <img className="album-cover" src={this.props.safeTrack.album.images[2].url} alt={this.props.safeTrack.album.name} />
                    <p className="top-track-name">{this.props.safeTrack.name}</p>
                    <p className="top-track-duration">{millisToMinutesAndSeconds(this.props.safeTrack.duration_ms)}</p>
                    <Progress
                        popularity={this.props.safeTrack.popularity}
                    />
                </div>
            );
        }
        return (
            <p>Sorry, no safe tracks</p>
        );
    }
}

export default SafeTracks;