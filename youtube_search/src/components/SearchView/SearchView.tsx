import { SelectedItem } from '../App';
import VideoList from '../VideoList/VideoList';

import './SearchView.scss';

type SearchViewProps = {
    handleVideoSelect: (video: SelectedItem | any) => void,
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

const SearchView = ({ handleVideoSelect, videos }: SearchViewProps) => (
    <div className="searchViewContainer">
        <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
    </div>
)

export default SearchView;
