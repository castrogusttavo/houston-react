import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserAdd02Icon({
  iconName = 'user-add-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
