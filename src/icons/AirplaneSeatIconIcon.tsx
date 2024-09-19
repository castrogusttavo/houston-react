import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AirplaneSeatIconIcon({ iconName = 'airplane-seat-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
