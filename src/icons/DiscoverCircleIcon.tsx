import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiscoverCircleIcon({
  iconName = 'discover-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
