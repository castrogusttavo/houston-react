import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MenuSquareIcon({
  iconName = 'menu-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
