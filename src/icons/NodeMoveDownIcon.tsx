import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NodeMoveDownIcon({
  iconName = 'node-move-down',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
