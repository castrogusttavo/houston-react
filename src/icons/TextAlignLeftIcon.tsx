import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextAlignLeftIcon({
  iconName = 'text-align-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
