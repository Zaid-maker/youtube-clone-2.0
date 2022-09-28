import { Stack } from '@mui/material'
import React from 'react'

import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSlectedCategory }) => {
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button className="category-btn" key={category.name}>
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
}

export default Sidebar
