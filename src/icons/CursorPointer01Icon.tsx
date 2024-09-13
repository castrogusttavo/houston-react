import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorPointer01Icon({
  iconName = 'cursor-pointer-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
