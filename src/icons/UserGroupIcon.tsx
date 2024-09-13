import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserGroupIcon({
  iconName = 'user-group',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
