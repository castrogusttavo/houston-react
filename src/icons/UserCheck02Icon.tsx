import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserCheck02Icon({
  iconName = 'user-check-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
