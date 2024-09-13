import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CircleArrowDownDoubleIcon({
  iconName = 'circle-arrow-down-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
