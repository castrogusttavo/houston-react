import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MultiplicationSignSquareIcon({
  iconName = 'multiplication-sign-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
