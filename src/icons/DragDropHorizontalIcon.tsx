import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DragDropHorizontalIcon({
  iconName = 'drag-drop-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
