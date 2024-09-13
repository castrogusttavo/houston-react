import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MapsLocation01Icon({
  iconName = 'maps-location-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
