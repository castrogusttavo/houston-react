import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowUpLeftIcon({
  iconName = 'square-arrow-up-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
