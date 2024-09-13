import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextNumberSignIcon({
  iconName = 'text-number-sign',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
