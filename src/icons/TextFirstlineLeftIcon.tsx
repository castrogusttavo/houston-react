import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextFirstlineLeftIcon({
  iconName = 'text-firstline-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
