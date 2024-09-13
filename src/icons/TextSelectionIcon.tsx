import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextSelectionIcon({
  iconName = 'text-selection',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
