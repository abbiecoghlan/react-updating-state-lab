import React from 'react'

// Code YouTubeDebugger Component Here
export default class YouTubeDebugger extends React.Component {

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }
    handleBitrateClick = () => {
        console.log("you pushed this button")
        this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
            }
        })
    }
    handleResolutionClick = () => {
        console.log("you pushed this button")
        this.setState({
        settings: {
            ...this.state.settings,
            video: {resolution: '720p'}
            }
        })
    }

    render() {
        return(
            <React.Fragment>
            <button onClick={this.handleBitrateClick} className="bitrate" >Bitrate</button>           
            <button onClick={this.handleResolutionClick} className="resolution" >resolution</button>
            </React.Fragment>
        )
    }

}