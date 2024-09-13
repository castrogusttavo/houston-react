import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserCircle02Icon({
  iconName = 'user-circle-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
