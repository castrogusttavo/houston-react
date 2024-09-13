import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HairDryerIcon({
  iconName = 'hair-dryer',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
