import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ColorPickerIcon({
  iconName = 'color-picker',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
