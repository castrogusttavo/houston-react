import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextSubscriptIcon({
  iconName = 'text-subscript',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
