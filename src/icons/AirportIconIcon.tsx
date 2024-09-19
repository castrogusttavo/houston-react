import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AirportIconIcon({ iconName = 'airport-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
