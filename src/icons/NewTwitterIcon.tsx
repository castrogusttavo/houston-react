import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NewTwitterIcon({
  iconName = 'new-twitter',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
