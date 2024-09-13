import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TrafficIncidentIcon({
  iconName = 'traffic-incident',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
