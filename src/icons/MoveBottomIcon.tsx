import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoveBottomIcon({
  iconName = 'move-bottom',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
