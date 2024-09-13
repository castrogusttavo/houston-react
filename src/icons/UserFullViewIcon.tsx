import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserFullViewIcon({
  iconName = 'user-full-view',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
