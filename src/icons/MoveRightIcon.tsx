import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoveRightIcon({
  iconName = 'move-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
