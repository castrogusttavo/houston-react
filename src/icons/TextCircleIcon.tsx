import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextCircleIcon({
  iconName = 'text-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
