import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AmbulanceIcon({ iconName = 'ambulance', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
