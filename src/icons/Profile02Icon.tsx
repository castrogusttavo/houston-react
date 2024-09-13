import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Profile02Icon({
  iconName = 'profile-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
