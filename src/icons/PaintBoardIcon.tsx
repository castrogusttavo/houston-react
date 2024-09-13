import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PaintBoardIcon({
  iconName = 'paint-board',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
