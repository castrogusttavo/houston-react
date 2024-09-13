import React from 'react'
import { Icon, IconProps } from '../Icon'

export function OctopusIcon({ iconName = 'octopus', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
