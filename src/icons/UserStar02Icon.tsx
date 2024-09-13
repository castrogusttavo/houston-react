import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserStar02Icon({
  iconName = 'user-star-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
