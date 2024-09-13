import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RssLockedIcon({
  iconName = 'rss-locked',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
