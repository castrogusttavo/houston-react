import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DivideSignSquareIcon({
  iconName = 'divide-sign-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
