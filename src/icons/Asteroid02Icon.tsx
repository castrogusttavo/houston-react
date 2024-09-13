import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Asteroid02Icon({
  iconName = 'asteroid-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
