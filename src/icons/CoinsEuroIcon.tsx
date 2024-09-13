import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CoinsEuroIcon({
  iconName = 'coins-euro',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
