import { SelectedItem } from '../../types/types';

import './VideoItem.scss';

type VideoItemProps = {
    handleVideoSelect: (video: SelectedItem) => void,
    video: {
        snippet: {
            description?: string,
            title?: string,
            thumbnails: {
                medium: {
                    url?: string,
                }
            }
        }
    }
}

const VideoItem = ({ video, handleVideoSelect }: VideoItemProps) => {
    const { snippet } = video;
    const { description, thumbnails, title } = snippet;
    return (
        <div onClick={() => handleVideoSelect(video)} className='video-item item'>
            <img
                alt={description}
                className='image'
                src={thumbnails.medium.url}
            />
            <div className='content'>
                <div className='title'>{title}</div>
            </div>
        </div>
    );
}

export default VideoItem;
