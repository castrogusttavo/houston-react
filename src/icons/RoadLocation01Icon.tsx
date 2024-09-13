import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RoadLocation01Icon({
  iconName = 'road-location-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
