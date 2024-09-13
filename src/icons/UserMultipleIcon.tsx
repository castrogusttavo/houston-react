import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserMultipleIcon({
  iconName = 'user-multiple',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
