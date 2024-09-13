import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CircleArrowDownLeftIcon({
  iconName = 'circle-arrow-down-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
