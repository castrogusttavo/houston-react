import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserStatusIcon({
  iconName = 'user-status',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
