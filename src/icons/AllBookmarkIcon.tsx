import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AllBookmarkIcon({
  iconName = 'all-bookmark',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
