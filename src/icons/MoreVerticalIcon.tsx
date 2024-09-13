import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoreVerticalIcon({
  iconName = 'more-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
