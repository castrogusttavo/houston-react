import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowMoveRightUpIcon({
  iconName = 'square-arrow-move-right-up',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
