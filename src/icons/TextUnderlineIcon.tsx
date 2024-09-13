import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextUnderlineIcon({
  iconName = 'text-underline',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
