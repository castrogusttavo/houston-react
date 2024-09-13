import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PaintBrush01Icon({
  iconName = 'paint-brush-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
