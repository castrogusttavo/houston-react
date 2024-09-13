import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorDisabled01Icon({
  iconName = 'cursor-disabled-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
