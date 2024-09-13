import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SpotifyIcon({ iconName = 'spotify', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
