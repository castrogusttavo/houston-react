import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RectangularIcon({
  iconName = 'rectangular',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
