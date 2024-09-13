import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Playlist02Icon({
  iconName = 'playlist-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
