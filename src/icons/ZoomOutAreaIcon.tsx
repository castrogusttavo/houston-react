import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ZoomOutAreaIcon({
  iconName = 'zoom-out-area',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
