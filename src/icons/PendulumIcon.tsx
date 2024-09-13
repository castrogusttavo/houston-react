import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PendulumIcon({ iconName = 'pendulum', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
