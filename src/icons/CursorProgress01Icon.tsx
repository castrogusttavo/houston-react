import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorProgress01Icon({
  iconName = 'cursor-progress-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
