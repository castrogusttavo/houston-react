import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CongruentToSquareIcon({
  iconName = 'congruent-to-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
