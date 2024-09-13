import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CongruentToCircleIcon({
  iconName = 'congruent-to-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
