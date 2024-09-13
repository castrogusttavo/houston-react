import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RockingChairIcon({
  iconName = 'rocking-chair',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
