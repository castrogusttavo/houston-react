import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextWrapIcon({ iconName = 'text-wrap', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
