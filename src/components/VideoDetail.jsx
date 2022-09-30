import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Loader } from './'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=anippet.statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  if (!videoDetail?.snippet) return <Loader />

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail

  return (
    <Box minHeight="95vh">
      <Stack direction={{ sx: 'column', md: 'row' }}>
        <Box flex={2}>
          <Box>
            <ReactPlayer url={`https://wwww.youtube.com/watch?v=${id}`} className="react-player" controls />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
