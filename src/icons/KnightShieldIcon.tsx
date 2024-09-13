import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KnightShieldIcon({
  iconName = 'knight-shield',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
