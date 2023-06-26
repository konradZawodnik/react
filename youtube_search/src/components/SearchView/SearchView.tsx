import { SelectedItem } from "../../types/types";
import VideoList from "../VideoList/VideoList";

import "./SearchView.scss";

type SearchViewProps = {
  handleVideoSelect: (video: SelectedItem) => void;
  videos: Array<{
    snippet: {
      description?: string;
      title?: string;
      thumbnails: {
        medium: {
          url?: string;
        };
      };
    };
    id: {
      channelId: string;
      videoId: string;
    };
  }>;
};

const SearchView = ({ handleVideoSelect, videos }: SearchViewProps) => (
  <div className="searchViewContainer">
    <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
  </div>
);

export default SearchView;
