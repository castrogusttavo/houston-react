import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextSquareIcon({
  iconName = 'text-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
