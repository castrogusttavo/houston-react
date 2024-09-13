import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoreHorizontalIcon({
  iconName = 'more-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
