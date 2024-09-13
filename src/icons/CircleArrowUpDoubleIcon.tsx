import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CircleArrowUpDoubleIcon({
  iconName = 'circle-arrow-up-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
