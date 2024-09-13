import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BorderHorizontalIcon({
  iconName = 'border-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
