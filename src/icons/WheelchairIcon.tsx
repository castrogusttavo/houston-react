import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WheelchairIcon({
  iconName = 'wheelchair',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
