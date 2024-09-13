import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StackStarIcon({
  iconName = 'stack-star',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
