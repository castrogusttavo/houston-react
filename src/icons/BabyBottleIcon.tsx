import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BabyBottleIcon({
  iconName = 'baby-bottle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
