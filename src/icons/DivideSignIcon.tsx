import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DivideSignIcon({
  iconName = 'divide-sign',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
