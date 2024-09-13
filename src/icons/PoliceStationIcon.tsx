import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PoliceStationIcon({
  iconName = 'police-station',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
