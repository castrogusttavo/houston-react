import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextClearIcon({
  iconName = 'text-clear',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
