import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AirplaneSeatIcon({ iconName = 'airplane-seat-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
