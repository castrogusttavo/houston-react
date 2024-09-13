import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoreOrLessSquareIcon({
  iconName = 'more-or-less-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
