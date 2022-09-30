import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoUrl } from '../utils/constants'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  <Card
    sx={{
      width: { xs: '100%', sm: '358px', md: '320px' },
      boxShadow: 'none',
      borderRadius: 0,
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#fff">
          {snippet?.title.slice(0, 60) || demoVideoUrl.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant='subtitle2' color="gray">
          {snippet?.channelTitle || demoChannelTitle}
        </Typography>
      </Link>
    </CardContent>
  </Card>
}

export default VideoCard
