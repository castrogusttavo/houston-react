import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RightToLeftListBulletIcon({
  iconName = 'right-to-left-list-bullet',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
