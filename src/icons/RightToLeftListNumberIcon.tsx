import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RightToLeftListNumberIcon({
  iconName = 'right-to-left-list-number',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
