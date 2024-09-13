import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DivideSignCircleIcon({
  iconName = 'divide-sign-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
