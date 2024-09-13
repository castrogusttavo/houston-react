import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RootCircleIcon({
  iconName = 'root-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
