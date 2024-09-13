import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TankTopIcon({ iconName = 'tank-top', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
