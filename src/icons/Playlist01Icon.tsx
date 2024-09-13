import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Playlist01Icon({
  iconName = 'playlist-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
