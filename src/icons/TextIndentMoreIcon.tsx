import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextIndentMoreIcon({
  iconName = 'text-indent-more',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
