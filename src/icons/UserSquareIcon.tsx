import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserSquareIcon({
  iconName = 'user-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
