import { Box, Stack } from '@mui/material'
import React from 'react'

import { Loader, VideoCard, ChannelDetail } from './'

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={3}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelDetail channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
