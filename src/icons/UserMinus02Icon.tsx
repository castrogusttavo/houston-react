import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserMinus02Icon({
  iconName = 'user-minus-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
