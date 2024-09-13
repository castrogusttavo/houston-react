import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextCreationIcon({
  iconName = 'text-creation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
