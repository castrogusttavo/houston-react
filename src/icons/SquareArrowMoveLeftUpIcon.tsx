import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowMoveLeftUpIcon({
  iconName = 'square-arrow-move-left-up',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
