import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Sidebar, Videos } from './'
import { fetchFromAPI  } from '../utils/fetchFromAPI'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('new')
  const [videos, setVideos] = useState(null)

  /* A hook that is called when the component is mounted and when the selectedCategory changes. */
  useEffect(() => {
    /* Setting the videos state to null. */
    setVideos(null)

    /* Fetching the data from the API and setting the videos state to the data.items. */
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    )
  }, [selectedCategory])

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: 'column',
          md: 'row',
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: 'auto',
            md: '92vh',
          },
          borderRight: '1px solid #3d3d3d',
          px: {
            sx: 0,
            md: 2,
          },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
