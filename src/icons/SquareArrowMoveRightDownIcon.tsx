import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowMoveRightDownIcon({
  iconName = 'square-arrow-move-right-down',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
