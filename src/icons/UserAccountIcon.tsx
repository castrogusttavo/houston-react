import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserAccountIcon({
  iconName = 'user-account',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
