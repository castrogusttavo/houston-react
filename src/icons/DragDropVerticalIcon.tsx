import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DragDropVerticalIcon({
  iconName = 'drag-drop-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
