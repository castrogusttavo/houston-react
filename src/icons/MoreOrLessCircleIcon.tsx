import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoreOrLessCircleIcon({
  iconName = 'more-or-less-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
