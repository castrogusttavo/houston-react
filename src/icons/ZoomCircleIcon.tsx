import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ZoomCircleIcon({
  iconName = 'zoom-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
