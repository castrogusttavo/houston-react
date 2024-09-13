import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BorderVerticalIcon({
  iconName = 'border-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
