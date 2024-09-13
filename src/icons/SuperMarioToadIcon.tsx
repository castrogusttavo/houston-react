import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SuperMarioToadIcon({
  iconName = 'super-mario-toad',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
