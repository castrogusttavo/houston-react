import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StrokeCenterIcon({
  iconName = 'stroke-center',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
