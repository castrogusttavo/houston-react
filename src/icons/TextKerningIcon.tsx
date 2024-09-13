import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextKerningIcon({
  iconName = 'text-kerning',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
