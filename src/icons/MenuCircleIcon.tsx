import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MenuCircleIcon({
  iconName = 'menu-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
