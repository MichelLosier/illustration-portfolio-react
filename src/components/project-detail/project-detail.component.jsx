import React from 'react';
import PropTypes from 'prop-types'

import Image from '../image/image.component';


class ProjectDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentIndex: 0,
        }
    }
    static propTypes = {
        project: PropTypes.object,
    }

    handleNavigationPaddleClick = (intChange) => {
        
        this.setState((prevState) => {
            const {currentIndex} = prevState;
            const nextIndex = currentIndex + intChange;

            const newIndex = (nextIndex >= 0 && nextIndex < this.props.project.gallery.length) ? 
                nextIndex : currentIndex

            return {currentIndex: newIndex}
        })
    }

    render(){
        const {project} = this.props;
        const {currentIndex} = this.state;
        const currentArtwork = project.gallery[currentIndex];
        const currentArtworkImage = currentArtwork.images.largeImage;

        const showLeft = currentIndex > 0;
        const showRight = (currentIndex < (project.gallery.length-1)) && (project.gallery.length > 0);

        return(
            <div className="project-detail">
                <h2>{project.name}</h2>
                <div className="artwork-navigation-container">
                    <div 
                        className={(showLeft) ? `visible navigation-paddle left` : `navigation-paddle left`}
                        onClick={()=>{this.handleNavigationPaddleClick(-1)}}
                    >
                        {showLeft && <p>&lt;</p>}
                    </div>
                    <div className="image-container">
                        <Image
                            url={currentArtworkImage.url}
                            altText={currentArtworkImage.altText}
                        />
                    </div>
                    <div 
                        className={(showRight) ? `visible navigation-paddle right` : `navigation-paddle right`}
                        onClick={()=>{this.handleNavigationPaddleClick(1)}}
                    >
                        {showRight && <p>&gt;</p>}
                    </div>
                </div>
                <div className="caption">
                        {currentArtwork.caption}
                </div>
            </div>
        )
    }

}

export default ProjectDetail;
