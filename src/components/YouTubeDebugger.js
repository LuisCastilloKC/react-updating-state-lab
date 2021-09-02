// Code YouTubeDebugger Component Here

import React, {Component} from 'react';

 class YouTubeDebugger extends Component{
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

     bitrateClick = () =>{
        this.setState((firstState)=>{
            return{
                settings: {
                    ...firstState.settings,
                    bitrate: 12,
                }
            }
        })
     }

     resolutionClick = () =>{
        this.setState((firstState)=>{
            return{
                settings: {
                    ...firstState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
     }

     render(){
         return(
             <div> 
                 <button className='bitrate' onClick={this.bitrateClick}>Bitrate</button>
                 <button className ='resolution' onClick={this.resolutionClick}>Resolution</button>
             </div>
         )
     }

 }

 export default YouTubeDebugger;