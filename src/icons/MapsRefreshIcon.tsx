import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MapsRefreshIcon({
  iconName = 'maps-refresh',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
