import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextSuperscriptIcon({
  iconName = 'text-superscript',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
