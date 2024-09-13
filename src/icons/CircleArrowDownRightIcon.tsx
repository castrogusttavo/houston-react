import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CircleArrowDownRightIcon({
  iconName = 'circle-arrow-down-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
