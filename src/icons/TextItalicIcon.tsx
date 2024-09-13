import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextItalicIcon({
  iconName = 'text-italic',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
