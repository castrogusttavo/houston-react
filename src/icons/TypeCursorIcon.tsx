import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TypeCursorIcon({
  iconName = 'type-cursor',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
