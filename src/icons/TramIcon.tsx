import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TramIcon({ iconName = 'tram', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
