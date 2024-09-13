import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ZoomSquareIcon({
  iconName = 'zoom-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
