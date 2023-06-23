import { SelectedItem } from '../../types/types';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';

import './PlayingView.scss';

type PlayingViewProps = {
    handleVideoSelect: (video: SelectedItem) => void,
    video?: {
        snippet: {
            description: string,
            title: string,
        },
        id: {
            channelId: string,
            videoId: string,
        }
    } | null,
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

const PlayingView = ({ handleVideoSelect, videos, video }: PlayingViewProps) => (
    <>
        <div className="firstColumn">
            <VideoDetail video={video} />
        </div>
        <div className="secondColumn">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
        </div>
    </>
);

export default PlayingView;
