import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LeftToRightListStarIcon({
  iconName = 'left-to-right-list-star',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
