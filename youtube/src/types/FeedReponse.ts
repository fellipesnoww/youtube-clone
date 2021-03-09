interface Video {
    id: number;
    name: string;
    image_url: string;
    views: string;
    time: string;
}

interface Channel {
    name: string;
    avatar: string;
}

interface Tag{
    id: number;
    description: string;
}

export interface FeedReponse {
    videos: Array<Video>;
}