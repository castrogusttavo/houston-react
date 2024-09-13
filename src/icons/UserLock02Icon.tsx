import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserLock02Icon({
  iconName = 'user-lock-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
