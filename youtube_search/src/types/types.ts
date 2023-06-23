export type SelectedVideos = Array<{
    snippet: {
      description?: string | undefined;
      title?: string | undefined;
      thumbnails: { medium: { url?: string | undefined } };
    };
    id: { channelId: string; videoId: string };
  }>;

export type SelectedVideo =
  | {
      snippet: { description: string; title: string };
      id: { channelId: string; videoId: string };
    }
  | null
  | undefined;

export type SelectedItem =
  | {
      snippet: { description?: string; title?: string };
    }
  | null
  | undefined;