import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FocusPointIcon({
  iconName = 'focus-point',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
