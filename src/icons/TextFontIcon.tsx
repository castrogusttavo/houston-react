import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextFontIcon({ iconName = 'text-font', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
