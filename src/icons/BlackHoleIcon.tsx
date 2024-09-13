import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BlackHoleIcon({
  iconName = 'black-hole',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
