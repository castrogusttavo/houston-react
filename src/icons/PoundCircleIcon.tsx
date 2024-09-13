import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PoundCircleIcon({
  iconName = 'pound-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
