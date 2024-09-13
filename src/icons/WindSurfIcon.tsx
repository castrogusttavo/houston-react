import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WindSurfIcon({ iconName = 'wind-surf', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
