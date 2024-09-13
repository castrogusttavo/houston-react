import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StationeryIcon({
  iconName = 'stationery',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
