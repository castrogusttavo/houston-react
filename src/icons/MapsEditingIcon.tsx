import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MapsEditingIcon({
  iconName = 'maps-editing',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
