import { SelectedItem } from '../App';
import VideoItem from '../VideoItem/VideoItem';

import './VideoList.scss';

type VideoListProps = {
    handleVideoSelect: (video: SelectedItem) => void,
    videos: Array<{
        snippet: {
            description?: string,
            title?: string,
            thumbnails: {
                medium: {
                    url?: string,
                }
            }
        },
        id: {
            channelId: string,
            videoId: string,
        }
    }>,
}

const VideoList = ({ videos, handleVideoSelect }: VideoListProps) => {
    const renderedVideos = videos.map((video) => {
        const { id } = video;
        const { channelId, videoId } = id;
        return <VideoItem 
            key={channelId ? `https://www.youtube.com/embed/${channelId}`
            : `https://www.youtube.com/embed/${videoId}`}
            video={video}
            handleVideoSelect={handleVideoSelect} />
    });

    return <div className="renderedVideos">{renderedVideos}</div>;
};
export default VideoList;