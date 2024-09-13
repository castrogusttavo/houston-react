import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlipRightIcon({
  iconName = 'flip-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
