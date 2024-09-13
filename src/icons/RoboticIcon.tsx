import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RoboticIcon({ iconName = 'robotic', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
