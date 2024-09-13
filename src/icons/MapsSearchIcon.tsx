import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MapsSearchIcon({
  iconName = 'maps-search',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
