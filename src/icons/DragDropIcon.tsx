import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DragDropIcon({ iconName = 'drag-drop', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
