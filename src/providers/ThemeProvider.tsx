"use client"
import { useTheme } from '@/context/ThemeContext'
import React, { ReactNode } from 'react'

const ThemeProvider = ({children}: {children: ReactNode}) => {
  const {theme} = useTheme();

  return (
    <div className={`${theme}`}>{children}</div>
  )
}

export default ThemeProvider