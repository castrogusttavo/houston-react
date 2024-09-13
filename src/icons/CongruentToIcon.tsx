import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CongruentToIcon({
  iconName = 'congruent-to',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
