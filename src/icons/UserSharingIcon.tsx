import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserSharingIcon({
  iconName = 'user-sharing',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
