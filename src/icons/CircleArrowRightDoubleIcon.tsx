import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CircleArrowRightDoubleIcon({
  iconName = 'circle-arrow-right-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
