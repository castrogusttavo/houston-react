import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextVerticalAlignmentIcon({
  iconName = 'text-vertical-alignment',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
