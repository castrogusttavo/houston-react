import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Asteroid01Icon({
  iconName = 'asteroid-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
