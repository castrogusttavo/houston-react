import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AirportIcon({ iconName = 'airport', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
