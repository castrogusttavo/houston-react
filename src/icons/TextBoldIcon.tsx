import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextBoldIcon({ iconName = 'text-bold', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
