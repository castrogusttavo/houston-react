import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextStrikethroughIcon({
  iconName = 'text-strikethrough',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
