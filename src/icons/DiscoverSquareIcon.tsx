import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiscoverSquareIcon({
  iconName = 'discover-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
