import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextItalicSlashIcon({
  iconName = 'text-italic-slash',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
