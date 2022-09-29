import { Box, Stack } from '@mui/material'
import React from 'react'

import { Loader, VideoCard, ChannelDetail } from './'

const Videos = ({ videos, direction }) => {
  // if (!videos.length) return <Loader />

  return (
    <Stack>
      <Box>
        <VideoCard />
        <ChannelDetail />
      </Box>
    </Stack>
  )
}

export default Videos