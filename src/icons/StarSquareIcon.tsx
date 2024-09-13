import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StarSquareIcon({
  iconName = 'star-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
