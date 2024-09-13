import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NodeMoveUpIcon({
  iconName = 'node-move-up',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
